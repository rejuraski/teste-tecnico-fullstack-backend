import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { Email } from "../../entities/email.entity";
import { Phone } from "../../entities/phone.entity";
import { IContact, IContactRequest } from "../../interfaces/contacts";

const createContactService = async ({
  name,
  emails,
  phones,
}: IContactRequest): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const filterContact = await contactRepository.findOneBy({
    name: name,
  });

  if (filterContact) {
    throw new Error("Usuário já cadastrado");
  }

  const contact = contactRepository.create({
    name,
  });

  await contactRepository.save(contact);

  if (emails && emails.length) {
    const emailRepository = AppDataSource.getRepository(Email);

    emails.forEach(async (email) => {
      const filterEmail = await emailRepository.findOneBy({
        email: email.email,
        contact: contact,
      });

      if (!filterEmail) {
        const e = emailRepository.create({
          email: email.email,
          contact: contact,
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
        contact: contact,
      });

      if (!filterPhone) {
        const e = phoneRepository.create({
          phone: phone.phone,
          contact: contact,
        });

        phoneRepository.save(e);
      }
    });
  }

  return contact;
};

export default createContactService;
