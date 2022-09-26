import { Request, Response } from "express";
import createClientService from "../services/clients/createClient.service";
import deleteClientService from "../services/clients/deleteClient.service";
import listClientService from "../services/clients/listClient.service";
import loadClientService from "../services/clients/loadClient.service";
import updateClientService from "../services/clients/updateClient.service";

const createClientController = async (req: Request, res: Response) => {
  try {
    const { name, emails, phones } = req.body;
    const newClient = await createClientService({ name, emails, phones });
    return res.json(newClient);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const listClientController = async (req: Request, res: Response) => {
  const clients = await listClientService();
  return res.json(clients);
};

const deleteClientController = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    await deleteClientService(clientId);
    return res.status(200).json({
      message: "Cliente deletado com sucesso",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const loadClientController = async (req: Request, res: Response) => {
  try {
    console.log(req);
    const clientId = req.params.id;
    const client = await loadClientService(clientId);
    return res.json(client);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

const updateClientController = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.id;
    const { name } = req.body;
    const user = await updateClientService(clientId, {
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
  createClientController,
  listClientController,
  deleteClientController,
  loadClientController,
  updateClientController,
};
