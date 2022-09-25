import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Email } from "./email.entity";
import { Phone } from "./phone.entity";

@Entity()
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @OneToMany(() => Email, (email) => email.contact)
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.contact)
  phones: Phone[];

  constructor() {
    if ("this.id") {
      this.id = uuid();
    }
  }
}
