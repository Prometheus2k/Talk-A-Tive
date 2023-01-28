const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const express = require("express");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("API is running successfully ...");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
