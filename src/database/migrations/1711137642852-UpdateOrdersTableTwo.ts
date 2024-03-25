import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateOrdersTableTwo1711137642852 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("orders", new TableColumn({
            name: "concludedAt",
            type: "timestamp",
            isNullable: true
        })) 
        await queryRunner.addColumn("orders", new TableColumn({
            name: "updatedAt",
            type: "timestamp",
            isNullable: true
        })) 
        await queryRunner.addColumn("orders", new TableColumn({
            name: "createdAt",
            type: "timestamp",
            isNullable: true
        })) 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("orders", "concludedAt") 
        await queryRunner.dropColumn("orders", "updatedAt") 
        await queryRunner.dropColumn("orders", "createdAt") 
    }

}
