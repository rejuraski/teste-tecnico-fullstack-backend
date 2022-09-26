import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContact, IContactRequest } from "../../interfaces/contacts";

const updateContactService = async (
  id: string,
  { name }: IContactRequest
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactLoaded = await contactRepository.findOneBy({ id });

  if (contactLoaded) {
    contactLoaded.name = name ? name : contactLoaded.name;

    contactRepository.update(id, contactLoaded);

    return contactLoaded;
  } else {
    throw new Error("Contato não encontrado");
  }
};

export default updateContactService;
