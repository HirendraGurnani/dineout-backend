const routes = require("express").Router();
const Business = require("../models/BusinessModel");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken")

routes.post("/", async (req, res) => {
  let { email, password } = req.body;
  let result = await Business.find({ email: email });
  if (result.length > 0) {
    //that means that the email is correct
    if (result[0].password === sha1(password)) {
      //password is correct
      let busObj = {
        id: result[0]._id, name: result[0].business_name
      }
      let token = jwt.sign(busObj, "hello")
      res.send({ success: true, token, business:result[0].business_name });
    } else {
      res.send({ success: false, errType: 2 });
    }
  } else {
    // that means email is incorrect
    res.send({ success: false, errType: 1 });
  }
});

module.exports = routes;
