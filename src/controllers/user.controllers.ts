import { Request, Response } from "express";
import UserModel from "../../models/user.models";
const crypto = require("crypto");
const uuid = crypto.randomUUID();

class UserController {
  // Create an user
  static async createUser(req: Request, res: Response) {
    const { username, password, email } = req.body;
    const id = uuid;
    try {
      const post = await UserModel.create({
        id,
        username,
        password,
        email,
      });
      res.status(201).json(post);
    } catch (err) {
      res.status(500).json({ error: "Unable to create this user." });
      console.log(err);
    }
  }
}

export default UserController;
