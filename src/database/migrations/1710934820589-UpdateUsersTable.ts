import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateUsersTable1710934820589 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "orders"`,)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD COLUMN "orders"`)
    }
}
