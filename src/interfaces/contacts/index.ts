import { Email } from "../../entities/email.entity";
import { Phone } from "../../entities/phone.entity";

export interface IContactRequest {
  name: string;
  emails?: Email[];
  phones?: Phone[];
}

export interface IContact {}
