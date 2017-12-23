require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../server/models/UserModel')

passport.use(
	new GoogleStrategy({
		callbackURL:'/auth/google/redirect',
		clientID:process.env.GOOGLE_CLIENT_ID,
		clientSecret:process.env.GOOGLE_CLIENT_SECRET
	}, (accessToken, refreshToken, profile, done) => {
		new User({
			username:profile.displayName,
			googleID:profile.id
		}).save()
			.then(newUser => {
				console.log('New user created...', newUser)
			})
			.catch(console.error)
	})
)


