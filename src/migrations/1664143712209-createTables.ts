import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664143712209 implements MigrationInterface {
    name = 'createTables1664143712209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "email" ("id" uuid NOT NULL, "email" character varying NOT NULL, "clientId" uuid, CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phone" ("id" uuid NOT NULL, "phone" character varying NOT NULL, "clientId" uuid, CONSTRAINT "PK_f35e6ee6c1232ce6462505c2b25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client_categories_contact" ("clientId" uuid NOT NULL, "contactId" uuid NOT NULL, CONSTRAINT "PK_5834d954695d576404f4e8dda21" PRIMARY KEY ("clientId", "contactId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2d76ae2317d9af1393b8065580" ON "client_categories_contact" ("clientId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6b10e95e61d9f944b801b3b708" ON "client_categories_contact" ("contactId") `);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_e80b16841aa5c3b215676efbed1" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phone" ADD CONSTRAINT "FK_4186ea1a6388347b12c2126e938" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_categories_contact" ADD CONSTRAINT "FK_2d76ae2317d9af1393b80655808" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "client_categories_contact" ADD CONSTRAINT "FK_6b10e95e61d9f944b801b3b7086" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_categories_contact" DROP CONSTRAINT "FK_6b10e95e61d9f944b801b3b7086"`);
        await queryRunner.query(`ALTER TABLE "client_categories_contact" DROP CONSTRAINT "FK_2d76ae2317d9af1393b80655808"`);
        await queryRunner.query(`ALTER TABLE "phone" DROP CONSTRAINT "FK_4186ea1a6388347b12c2126e938"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_e80b16841aa5c3b215676efbed1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6b10e95e61d9f944b801b3b708"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2d76ae2317d9af1393b8065580"`);
        await queryRunner.query(`DROP TABLE "client_categories_contact"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "phone"`);
        await queryRunner.query(`DROP TABLE "email"`);
    }

}
