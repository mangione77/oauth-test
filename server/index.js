require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// Middlewares
app.set('view engine', 'ejs')

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})