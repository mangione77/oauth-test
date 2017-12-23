require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const routes = require('./routes')

// View engine
app.set('view engine', 'ejs')

// Routes
app.use(routes)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})