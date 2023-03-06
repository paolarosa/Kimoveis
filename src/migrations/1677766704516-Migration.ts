import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1677766704516 implements MigrationInterface {
    name = 'Migration1677766704516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
