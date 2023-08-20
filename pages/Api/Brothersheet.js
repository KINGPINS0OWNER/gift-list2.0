const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    item: String,
    price: Number,
    availability: String
})

const UserApi = mongoose.api("Brother", userSchema)
module.exports = UserApi