import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./client.entity";
import { Contact } from "./contact.entity";

@Entity()
export class Phone {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  phone: string;

  @ManyToOne(() => Client, (client) => client.phones)
  client: Client;

  @ManyToOne(() => Contact, (contact) => contact.phones)
  contact: Contact;

  constructor() {
    if ("this.id") {
      this.id = uuid();
    }
  }
}
