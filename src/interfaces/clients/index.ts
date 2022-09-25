import { Email } from "../../entities/email.entity";
import { Phone } from "../../entities/phone.entity";

export interface IClientRequest {
  name: string;
  emails?: Email[];
  phones?: Phone[];
}

export interface IClient {
  created_at?: Date;
}
