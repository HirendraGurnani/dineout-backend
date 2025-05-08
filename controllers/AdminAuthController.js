let routes = require("express").Router();
let Admin = require("../models/Admin");
let sha1 = require("sha1");
const jwt = require("jsonwebtoken")

// routes.get("/", async (req,res)=>{
//     await Admin.create({name: "Admin", username:"Admin", password: sha1("admin") })
// })

routes.post("/", async (req, res) => {
  let { username, password } = req.body;
  let result = await Admin.find({ username: username });
  if (result.length>0){
    if(result[0].password===sha1(password)){
      let token = jwt.sign({id: result[0]._id}, "hello")
      let admin = result[0].name
      res.send({success: true, admin, token})
    }
    else{res.send({success: false, errType:2})}
  }
  else{res.send({success: false, errType:1})}
});

module.exports = routes;
