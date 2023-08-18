import { Request, Response } from "express";
import contactFormModel from "../../models/contactform.models";
const crypto = require("crypto");
const uuid = crypto.randomUUID();

class ContactFormController {
  // Create
  static async createMessage(req: Request, res: Response) {
    const { nameAuthor, email, message } = req.body;
    const id = uuid;
    try {
      const form = await contactFormModel.create({
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

  static async getAllMessages(req: Request, res: Response) {
    try {
      const messages = await contactFormModel.findAll();
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json({ error: "Unable to get all messages." });
      console.log(err);
    }
  }
}

export default ContactFormController;
