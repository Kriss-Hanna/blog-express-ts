import { Request, Response } from "express";
import PostModel from "../../models/contactform.models";
const crypto = require("crypto");
const uuid = crypto.randomUUID();

class ContactFormController {
  // Create
  static async createPost(req: Request, res: Response) {
    const { nameAuthor, email, message } = req.body;
    const id = uuid;
    try {
      const form = await PostModel.create({
        id,
        nameAuthor,
        email,
        message,
      });
      res.status(201).json(form);
    } catch (err) {
      res.status(500).json({ error: "Unable to create this form." });
      console.log(err);
    }
  }
}

export default ContactFormController;
