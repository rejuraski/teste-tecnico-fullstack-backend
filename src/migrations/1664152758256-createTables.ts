import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1664152758256 implements MigrationInterface {
    name = 'createTables1664152758256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_e80b16841aa5c3b215676efbed1"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_792af602479d447138e5d58b63e"`);
        await queryRunner.query(`ALTER TABLE "phone" DROP CONSTRAINT "FK_4186ea1a6388347b12c2126e938"`);
        await queryRunner.query(`ALTER TABLE "phone" DROP CONSTRAINT "FK_0d49fa96cb9d5cc46b9598f3489"`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_e80b16841aa5c3b215676efbed1" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_792af602479d447138e5d58b63e" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phone" ADD CONSTRAINT "FK_4186ea1a6388347b12c2126e938" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phone" ADD CONSTRAINT "FK_0d49fa96cb9d5cc46b9598f3489" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "phone" DROP CONSTRAINT "FK_0d49fa96cb9d5cc46b9598f3489"`);
        await queryRunner.query(`ALTER TABLE "phone" DROP CONSTRAINT "FK_4186ea1a6388347b12c2126e938"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_792af602479d447138e5d58b63e"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_e80b16841aa5c3b215676efbed1"`);
        await queryRunner.query(`ALTER TABLE "phone" ADD CONSTRAINT "FK_0d49fa96cb9d5cc46b9598f3489" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phone" ADD CONSTRAINT "FK_4186ea1a6388347b12c2126e938" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_792af602479d447138e5d58b63e" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_e80b16841aa5c3b215676efbed1" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
