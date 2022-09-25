import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Email } from "../../entities/email.entity";
import { Phone } from "../../entities/phone.entity";
import { IClient, IClientRequest } from "../../interfaces/clients";

const createClientService = async ({
  name,
  emails,
  phones,
}: IClientRequest): Promise<IClient> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const filterClient = await clientRepository.findOneBy({
    name: name,
  });

  if (filterClient) {
    throw new Error("Usuário já cadastrado");
  }

  const client = clientRepository.create({
    name,
    created_at: new Date(),
  });

  await clientRepository.save(client);

  if (emails && emails.length) {
    const emailRepository = AppDataSource.getRepository(Email);

    emails.forEach(async (email) => {
      const filterEmail = await emailRepository.findOneBy({
        email: email.email,
        client: client,
      });

      if (!filterEmail) {
        const e = emailRepository.create({
          email: email.email,
          client: client,
        });

        emailRepository.save(e);
      }
    });
  }

  if (phones && phones.length) {
    const phoneRepository = AppDataSource.getRepository(Phone);

    phones.forEach(async (phone) => {
      const filterPhone = await phoneRepository.findOneBy({
        phone: phone.phone,
        client: client,
      });

      if (!filterPhone) {
        const e = phoneRepository.create({
          phone: phone.phone,
          client: client,
        });

        phoneRepository.save(e);
      }
    });
  }

  return client;
};

export default createClientService;
