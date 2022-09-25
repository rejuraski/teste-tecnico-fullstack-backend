import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664144024243 implements MigrationInterface {
    name = 'createTables1664144024243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client_contacts_contact" ("clientId" uuid NOT NULL, "contactId" uuid NOT NULL, CONSTRAINT "PK_c19438ace9933643357629f2e21" PRIMARY KEY ("clientId", "contactId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a58dceebf34d46b34322c23392" ON "client_contacts_contact" ("clientId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6cac1774de8d53a1eec7df033e" ON "client_contacts_contact" ("contactId") `);
        await queryRunner.query(`ALTER TABLE "email" ADD "contactId" uuid`);
        await queryRunner.query(`ALTER TABLE "phone" ADD "contactId" uuid`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_792af602479d447138e5d58b63e" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phone" ADD CONSTRAINT "FK_0d49fa96cb9d5cc46b9598f3489" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_contacts_contact" ADD CONSTRAINT "FK_a58dceebf34d46b34322c23392b" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_contacts_contact" ADD CONSTRAINT "FK_6cac1774de8d53a1eec7df033e6" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_contacts_contact" DROP CONSTRAINT "FK_6cac1774de8d53a1eec7df033e6"`);
        await queryRunner.query(`ALTER TABLE "client_contacts_contact" DROP CONSTRAINT "FK_a58dceebf34d46b34322c23392b"`);
        await queryRunner.query(`ALTER TABLE "phone" DROP CONSTRAINT "FK_0d49fa96cb9d5cc46b9598f3489"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_792af602479d447138e5d58b63e"`);
        await queryRunner.query(`ALTER TABLE "phone" DROP COLUMN "contactId"`);
        await queryRunner.query(`ALTER TABLE "email" DROP COLUMN "contactId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6cac1774de8d53a1eec7df033e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a58dceebf34d46b34322c23392"`);
        await queryRunner.query(`DROP TABLE "client_contacts_contact"`);
    }

}
