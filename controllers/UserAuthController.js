const routes = require("express").Router();
const User = require("../models/UserModel");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async (req, res) => {
  let { email, password } = req.body;
  let result = await User.find({ email: email });
  if (result.length > 0) {
    //that means that the email is correct
    if (result[0].password === sha1(password)) {
      let userObj = {
        id: result[0]._id,
        name: result[0].name,
        email: result[0].email,
      };
      let token = jwt.sign(userObj, "hello");
      let userInfo = { name: result[0].name, email: result[0].email };
      //password is correct
      res.send({ success: true, access_token: token, userInfo: userInfo });
    } else {
      res.send({ success: false, errType: 2 });
    }
  } else {
    // that means email is incorrect
    res.send({ success: false, errType: 1 });
  }
});

module.exports = routes;
