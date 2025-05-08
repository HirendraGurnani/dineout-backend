require("../config/conn");
let mongoose = require("mongoose");

let businessSchema = mongoose.Schema({
    name: String,
    business_name: String,
    email: String,
    password: String,
    contact: String,
    state: String,
    city: String,
    image: String,
    rating: String,
    address: String
},{collection: "business"})

let Business = mongoose.model("business", businessSchema)
module.exports = Business;