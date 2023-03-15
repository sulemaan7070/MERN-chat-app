const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`sevrer started at ${PORT}`));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
