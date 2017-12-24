require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT
const routes = require('./routes')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const passport = require('passport')
const passportSetup = require('../config/passport-setup')
const cookieSession = require('cookie-session')

app.use(cookieSession({
	maxAge: 24*60*60*1000, // (lasts one day)
	keys: [process.env.COOKIE_KEY]
}))

app.use(passport.initialize())
app.use(passport.session())

// View engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// Routes
app.use(routes)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})