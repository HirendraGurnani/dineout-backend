const City = require("../models/CityModel");
const routes = require("express").Router();

routes.get("/getcity/:s", async (req, res) => {
  let state = req.params.s;
  if (state.charAt(0) === state.charAt(0).toLowerCase()) {
    state = state.charAt(0).toUpperCase() + state.slice(1);
  }
  let result = await City.find({ state: state });
  res.send(result);
});
routes.get("/getcity", async (req, res) => {
  let result = await City.find();
  res.send(result);
});

routes.get("/getstate", async (req, res) => {
  let result = await City.distinct("state");
  res.send(result);
});

module.exports = routes;
