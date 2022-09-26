import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./client.entity";
import { Contact } from "./contact.entity";

@Entity()
export class Phone {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  phone: string;

  @ManyToOne(() => Client, { onDelete: "CASCADE" })
  @JoinColumn()
  client: Client;

  @ManyToOne(() => Contact, { onDelete: "CASCADE" })
  @JoinColumn()
  contact: Contact;

  constructor() {
    if ("this.id") {
      this.id = uuid();
    }
  }
}
