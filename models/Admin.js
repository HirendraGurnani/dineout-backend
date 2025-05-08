require("../config/conn")
const mongoose = require("mongoose")
const adminSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
},{collection:"admins"})

const adminModel = mongoose.model("admins", adminSchema)

module.exports = adminModel   