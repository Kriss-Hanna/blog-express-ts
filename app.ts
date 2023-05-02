const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
import "dotenv/config";
import PostController from "./src/controllers/post.controllers";

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Read route

app.get("/posts", PostController.getAllPosts);
app.post("/posts", PostController.createPost);

app.listen(PORT, console.log(`SERVER STARTED ON ${PORT}`));

export default app;
