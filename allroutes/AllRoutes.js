const routes = require("express").Router();

routes.use("/user", require("../controllers/UserController"))
routes.use("/citydata", require("../controllers/CityController"))
routes.use("/business", require("../controllers/BusinessController"))
routes.use("/businessmanage", require("../controllers/BusinessManageController"))
routes.use("/userauth", require("../controllers/UserAuthController"))
routes.use("/busauth", require("../controllers/BusinessAuthController"))
routes.use("/adminauth", require("../controllers/AdminAuthController"))

module.exports = routes