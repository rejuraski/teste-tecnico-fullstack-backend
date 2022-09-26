import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const deleteContactService = async (contactId: string): Promise<boolean> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: contactId });
  if (!contact) {
    throw new Error("Contato não encontrado");
  }
  await contactRepository.delete({ id: contact.id });
  return true;
};

export default deleteContactService;
