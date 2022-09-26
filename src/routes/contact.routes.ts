import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  loadContactController,
  updateContactController,
} from "../controllers/contact.controller";

const contactRoutes = Router();

contactRoutes.post("", createContactController);
contactRoutes.get("", listContactController);
contactRoutes.get("/:id", loadContactController);
contactRoutes.patch("/:id", updateContactController);
contactRoutes.delete("/:id", deleteContactController);

export default contactRoutes;
