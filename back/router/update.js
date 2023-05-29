const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const apiUrl = process.env.APIURL;
const apiKey = process.env.APIKEY;

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const users = await userModel.find({});
    for (const user of users) {
      const link = user.link;
      const userId = link.split("/")[3];
      console.log(userId);

      const options = {
        method: "GET",
        url: "https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/",
        params: {
          user: userId,
        },
        headers: {
          "X-RapidAPI-Key":
            "ed51f84485mshb7e8ebc77c6391fp181372jsn610fb951dea9",
          "X-RapidAPI-Host": "instagram-scraper-2022.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.user.follower_count);
        user.currentCount = response.data.user.follower_count;
        await user.save();
      } catch (error) {
        console.error(error);
      }
    }
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
