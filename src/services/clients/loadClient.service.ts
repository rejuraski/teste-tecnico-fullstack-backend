import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClient } from "../../interfaces/clients";

const loadClientService = async (clientId: string): Promise<IClient> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) {
    throw new Error("Cliente não encontrado");
  }
  return client;
};

export default loadClientService;
