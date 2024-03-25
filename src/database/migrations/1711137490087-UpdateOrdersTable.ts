import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOrdersTable1711137490087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "concludedAt"`,)
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "updatedAt"`,)
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "createdAt"`,)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD COLUMN "concludedAt"`,)
        await queryRunner.query(`ALTER TABLE "orders" ADD COLUMN "updatedAt"`,)
        await queryRunner.query(`ALTER TABLE "orders" ADD COLUMN "createdAt"`,)
    }

}
