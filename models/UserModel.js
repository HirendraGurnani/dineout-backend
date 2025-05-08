require("../config/conn")
const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contact: String,
    state: String,
    city: String,
    address: String,
    gender: String
},{collection:"users"})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel   