import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "./contact.entity";
import { Email } from "./email.entity";
import { Phone } from "./phone.entity";

@Entity()
export class Client {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Email, (email) => email.client)
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.client)
  phones: Phone[];

  @ManyToMany(() => Contact)
  @JoinTable()
  contacts: Contact[];

  constructor() {
    if ("this.id") {
      this.id = uuid();
    }
  }
}
