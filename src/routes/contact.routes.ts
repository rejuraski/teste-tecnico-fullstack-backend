import { Router } from "express";
import { createContactController } from "../controllers/contact.controller";

const contactRoutes = Router();

contactRoutes.post("", createContactController);
// contactRoutes.get("", listClientController);
// contactRoutes.get("/:id", loadClientController);
// contactRoutes.patch("/:id", updateClientController);
// contactRoutes.delete("/:id", deleteClientController);

export default contactRoutes;
