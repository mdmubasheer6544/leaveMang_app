const express = require("express");
const User = require("../Models/userDetails");


const router = express.Router();

router.get("/all-leaves", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {});
});
router.get("/pending-leaves", (req, res) => {
  User.find({ status: "pending" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {});
});
router.get("/approved-leaves", (req, res) => {
  User.find({ status: "approved" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {});
});

router.put("/update-status", (req, res) => {
  const { id, value } = req.query;
  User.updateOne({ _id: id }, { $set: { status: value } }).then((result) =>
    res.send(result)
  );
});

module.exports = router;
