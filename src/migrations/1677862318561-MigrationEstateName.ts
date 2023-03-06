import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationEstateName1677862318561 implements MigrationInterface {
    name = 'MigrationEstateName1677862318561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "state" TO "realEstate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "realEstate" TO "state"`);
    }

}
