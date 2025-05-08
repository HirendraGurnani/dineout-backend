const routes = require("express").Router();
const Business = require("../models/BusinessModel");
const Hotel = require("../models/HotelModels");
const jwt = require("jsonwebtoken");

routes.post("/addhotels", async (req, res) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "hello");
    if (obj) {
      req.body.business_id = obj.id;
      await Hotel.create(req.body);
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  } else {
    res.send({ success: false });
  }
  // console.log(req.body);
  // console.log(req.headers);
});

module.exports = routes;
