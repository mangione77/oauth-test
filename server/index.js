require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT
const routes = require('./routes')

const passportSetup = require('../config/passport-setup')

// View engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// Routes
app.use(routes)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})