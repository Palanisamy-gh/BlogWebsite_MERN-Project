const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const databaseConnection = require("./lib/dataBase");
const postRouter = require("./router/post.router.js");
const categoryRouter = require("./router/category.router.js");

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

databaseConnection();

app.use("/posts", postRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () => {
  console.log(`The server is running on port : ${PORT}`);
});
