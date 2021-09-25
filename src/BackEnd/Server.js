const express = require("express");
require("./Connection/Connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.listen(port, (err) => {
  if (!err) {
    console.log(`Server Listening port ${port}`);
  }
});
