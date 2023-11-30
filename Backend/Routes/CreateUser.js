const express = require("express");
const router = express.Router();
const User = require("../Models/User/User");

router.post("/CreateUser", async (req, res) => {
  try {
    await User.create({
      name: "shyam",
      password: "123456",
      email: "shyamdas12@hotmail.com",
      location: "Qwerty edref",
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
