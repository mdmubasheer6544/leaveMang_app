const express = require("express");
const User = require("../Models/userDetails");

const router = express.Router();

router.post("/add-leave", (req, res) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  const userDetails = { ...req.body, applyDate: today };

  const user = new User(userDetails);
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  res.send(userDetails);
});

router.get("/my-leaves/:userId", (req, res) => {
  const id = req.params.userId;
  User.find({ userId: id })
    .then((result) => {
      if (result.length !== 0) {
        res.send(result);
      }
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
