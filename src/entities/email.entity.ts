import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./client.entity";
import { Contact } from "./contact.entity";

@Entity()
export class Email {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  email: string;

  @ManyToOne(() => Client, (client) => client.emails)
  client: Client;

  @ManyToOne(() => Contact, (contact) => contact.emails)
  contact: Contact;

  constructor() {
    if ("this.id") {
      this.id = uuid();
    }
  }
}
