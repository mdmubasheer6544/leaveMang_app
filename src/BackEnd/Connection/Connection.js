const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.REACT_APP_MONGO_URL;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Sucess");
  })
  .catch((err) => {
    console.log(err.message);
  });
mongoose.Promise = global.Promise;
