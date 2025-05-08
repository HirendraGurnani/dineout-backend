const express = require("express")
const app = express();
let cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started at port-", port);
});

app.use("/api/v1", require("./allroutes/AllRoutes.js"))
