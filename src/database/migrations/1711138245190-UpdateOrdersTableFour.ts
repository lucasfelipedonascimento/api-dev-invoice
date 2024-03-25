import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateOrdersTableFour1711138245190 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "monthlyPrice"`,)

        await queryRunner.addColumn("orders", new TableColumn({
            name: "monthlyPrice",
            type: "varchar",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD COLUMN "monthlyPrice"`,)

        await queryRunner.dropColumn("orders", "monthlyPrice")
    }

}
