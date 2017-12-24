require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../server/models/UserModel')

passport.serializeUser((user,done) => {
	done(null,user.id)
})

passport.deserializeUser((id,done) => {
	User.findById(id)
		.then(user => {
			done(null,user)
		})
		.catch(console.error)
})

passport.use(
	new GoogleStrategy({
		callbackURL:'/auth/google/redirect',
		clientID:process.env.GOOGLE_CLIENT_ID,
		clientSecret:process.env.GOOGLE_CLIENT_SECRET
	}, (accessToken, refreshToken, profile, done) => {
		// Passport callback - check if user already exists in the DB
		User.findOne({'googleID':profile.id})
			.then(currentUser => {
				if (currentUser) {
					// User exists? Then:
					console.log('User exists already...', currentUser)
					done(null,currentUser)
				}
				else {
					// User doesn't exist? Then:
					new User({username:profile.displayName, googleID:profile._json.id, imageURL: profile._json.image.url})
						.save()
							.then(newUser => {
								console.log('New user created...', newUser)
								done(null,newUser)
							})
							.catch(console.error)
				}
			})
	})
)


