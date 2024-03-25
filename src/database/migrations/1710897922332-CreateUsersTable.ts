import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1710897922332 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    isUnique: true,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'orders',
                    type: 'jsonb',
                    isArray: true,
                    isNullable: true,
                },
                {
                    name: 'general_profits',
                    type: 'varchar',
                },
                {
                    name: 'createdAt',
                    type: 'varchar',
                },
                {
                    name: 'updatedAt',
                    type: 'varchar',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }
}
