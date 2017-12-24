const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	username:String,
	googleID:String,
	imageURL:String
})

module.exports = mongoose.model('User', UserSchema)