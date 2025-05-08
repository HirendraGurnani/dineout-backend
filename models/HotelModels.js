require("../config/conn.js")
const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema({
    hotel_name: String,
    address: String,
    hotel_image: String,
    menu_image: String,
    tables: Number,
    price: Number,
    business_id : {type: mongoose.Schema.Types.ObjectId, ref: "BusinessModel"},
}, { collection: "hotel" });

let Hotel = mongoose.model("hotel", HotelSchema);
module.exports = Hotel;