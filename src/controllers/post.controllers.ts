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

  // Update
  static async updatePost(req: Request, res: Response) {
    const { id } = req.params;
    const { title, imageurl, description } = req.body;

    try {
      const [updated] = await PostModel.update(
        { title, imageurl, description },
        { where: { id } }
      );
      if (updated) {
        const updatedPost = await PostModel.findOne({ where: { id } });
        res.status(200).json(updatedPost);
      } else {
        throw new Error("Post not found");
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }

  // Delete
  static async deletePost(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleted = await PostModel.destroy({ where: { id } });
      if (deleted) {
        res.status(204).send("Post deleted");
      } else {
        throw new Error("Post not found");
      }
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
        console.log(err);
      }
    }
  }
}

export default PostController;
