import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContact } from "../../interfaces/contacts";

const loadContactService = async (contactId: string): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: contactId });
  if (!contact) {
    throw new Error("Contato não encontrado");
  }
  return contact;
};

export default loadContactService;
