const express = require("express");
const usersApi = require("./router/users");
const updateApi = require("./router/update");
const connectDB = require("./db/db");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

app.use(cors());

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5900;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", usersApi);
app.use("/api/update", updateApi);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
