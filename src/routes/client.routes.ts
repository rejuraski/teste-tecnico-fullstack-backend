import { Router } from "express";
import { createClientController } from "../controllers/client.controller";

const clientRoutes = Router();

clientRoutes.post("", createClientController);
// clientRoutes.get("", listClientController);
// clientRoutes.get("/:id", loadClientController);
// clientRoutes.patch("/:id", updateClientController);
// clientRoutes.delete("/:id", deleteClientController);

export default clientRoutes;
