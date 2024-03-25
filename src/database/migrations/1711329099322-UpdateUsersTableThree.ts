import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateUsersTableThree1711329099322 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user"`,)

        await queryRunner.addColumn("users", new TableColumn({
            name: "name",
            type: "varchar",
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD COLUMN "user"`,)
        await queryRunner.dropColumn("users", "name")
    }

}
