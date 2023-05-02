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

  // Create
  static async createPost(req: Request, res: Response) {
    const { title, imageurl, description } = req.body;
    const id = uuid;
    try {
      const post = await PostModel.create({
        id,
        title,
        imageurl,
        description,
      });
      res.status(201).json(post);
    } catch (err) {
      res.status(500).json({ error: "Unable to create post." });
      console.log(err);
    }
  }
}

export default PostController;
