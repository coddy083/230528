const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const users = await userModel.find({}, { id: 0 });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const user = new userModel(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
