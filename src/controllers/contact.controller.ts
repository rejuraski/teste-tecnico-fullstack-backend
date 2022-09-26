import { Request, Response } from "express";
import createContactService from "../services/contact/createContact.service";
import deleteContactService from "../services/contact/deleteContact.service";
import listContactService from "../services/contact/listContact.service";
import loadContactService from "../services/contact/loadContact.service";
import updateContactService from "../services/contact/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  try {
    const { name, emails, phones } = req.body;
    const newContact = await createContactService({ name, emails, phones });
    return res.json(newContact);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listContactController = async (req: Request, res: Response) => {
  const contacts = await listContactService();
  return res.json(contacts);
};

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    await deleteContactService(clientId);
    return res.status(200).json({
      message: "Contato deletado com sucesso",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const loadContactController = async (req: Request, res: Response) => {
  try {
    const contactId = req.params.id;
    const contact = await loadContactService(contactId);
    return res.json(contact);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const updateContactController = async (req: Request, res: Response) => {
  try {
    const contactId = req.params.id;
    const { name } = req.body;
    const user = await updateContactService(contactId, {
      name,
    });
    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export {
  createContactController,
  listContactController,
  deleteContactController,
  loadContactController,
  updateContactController,
};
