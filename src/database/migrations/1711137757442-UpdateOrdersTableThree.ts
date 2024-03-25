import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateOrdersTableTwo1711137757442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "createdAt"`,)
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "updatedAt"`,)

        await queryRunner.addColumn("orders", new TableColumn({
            name: "createdAt",
            type: "timestamp",
            isNullable: false
        }))
        await queryRunner.addColumn("orders", new TableColumn({
            name: "updatedAt",
            type: "timestamp",
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD COLUMN "createdAt"`,)
        await queryRunner.query(`ALTER TABLE "orders" ADD COLUMN "updatedAt"`,)

        await queryRunner.dropColumn("orders", "createdAt")
        await queryRunner.dropColumn("orders", "updatedAt")
    }

}
