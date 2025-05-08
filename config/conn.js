const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ghiren20:hirendra@foodfundatabase.k3rxu.mongodb.net/FoodFun"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Coundn't connect:", err);
  });

/*

username: ghiren20
password: myfilescdrive2
URL: mongodb+srv://ghiren20:<db_password>@foodfundatabase.k3rxu.mongodb.net/?retryWrites=true&w=majority&appName=foodfunDatabase
*/
