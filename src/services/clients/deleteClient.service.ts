import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

const deleteClientService = async (clientId: string): Promise<boolean> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) {
    throw new Error("Cliente não encontrado");
  }
  await clientRepository.delete({ id: client.id });
  return true;
};

export default deleteClientService;
