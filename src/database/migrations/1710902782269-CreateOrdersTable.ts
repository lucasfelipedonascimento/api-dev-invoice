import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrdersTable1710902782269 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(new Table({
            name: 'orders',
            columns: [
                {
                    name: 'userId',
                    type: 'uuid',
                },
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    isUnique: true,
                },
                {
                    name: 'project_name',
                    type: 'varchar',
                },
                {
                    name: 'general_costs',
                    type: 'varchar',
                },
                {
                    name: 'developer_name',
                    type: 'varchar',
                },
                {
                    name: 'developer_doc',
                    type: 'varchar',
                },
                {
                    name: 'client_name',
                    type: 'varchar',
                },
                {
                    name: 'client_doc',
                    type: 'varchar',
                },
                {
                    name: 'monthlyPrice',
                    type: 'varchar',
                },
                {
                    name: 'totalPrice',
                    type: 'varchar',
                },
                {
                    name: 'listOfTechnologies',
                    type: 'jsonb',
                    isArray: true,
                    isNullable: true,
                },
                {
                    name: 'development_time',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'varchar',
                },
                {
                    name: 'createdAt',
                    type: 'varchar',
                },
                {
                    name: 'updatedAt',
                    type: 'varchar',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }
}
