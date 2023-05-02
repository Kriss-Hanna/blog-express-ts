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

// Post routes

app.get("/posts", PostController.getAllPosts);
app.post("/posts", PostController.createPost);
app.put("/posts/:id", PostController.updatePost);
app.delete("/posts/:id", PostController.deletePost);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, console.log(`SERVER STARTED ON ${PORT}`));
}

export default app;
