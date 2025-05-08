const routes = require("express").Router();
const User = require("../models/UserModel");
const sha1 = require("sha1")

routes.get("/", async (req, res) => {
  let result = await User.find();
  res.send(result);
});

routes.post("/", async (req, res) => {
  delete req.body.repassword;
  //Encrypt password
  req.body.password = sha1(req.body.password)
  await User.create(req.body);
  res.send({ success: true });
});

// routes.delete("/deleteall", async (req,res)=>{
// await User.deleteMany()
// res.send({success: true})
// })

module.exports = routes;
