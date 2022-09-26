import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClient, IClientRequest } from "../../interfaces/clients";

const updateClientService = async (
  id: string,
  { name }: IClientRequest
): Promise<IClient> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientLoaded = await clientRepository.findOneBy({ id });

  if (clientLoaded) {
    clientLoaded.name = name ? name : clientLoaded.name;

    clientRepository.update(id, clientLoaded);

    return clientLoaded;
  } else {
    throw new Error("Cliente não encontrado");
  }
};

export default updateClientService;
