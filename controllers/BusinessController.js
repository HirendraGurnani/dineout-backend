const routes = require("express").Router();
const Business = require("../models/BusinessModel");
const sha1 = require("sha1");

routes.get("/", async (req, res) => {
  let result = await Business.find();
  res.send(result);
});

routes.post("/", async (req, res) => {
  delete req.body.repassword;
  req.body.password = sha1(req.body.password);
  const numbers = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  const randomIndex = Math.floor(Math.random() * numbers.length);
  const randomValue = numbers[randomIndex];
  req.body.rating =randomValue
  await Business.create(req.body);
  res.send({ success: true });
});

module.exports = routes;
