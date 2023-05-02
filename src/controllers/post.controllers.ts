import { Request, Response } from "express";
import PostModel from "../models/post.models";
const crypto = require("crypto");
const uuid = crypto.randomUUID();

class PostController {
  // Read

  static async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await PostModel.findAll();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: "Unable to get all posts." });
      console.log(err);
    }
  }
}

export default PostController;
