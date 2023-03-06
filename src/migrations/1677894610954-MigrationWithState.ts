import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationWithState1677894610954 implements MigrationInterface {
    name = 'MigrationWithState1677894610954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "realEstate" TO "state"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "state" TO "realEstate"`);
    }

}
