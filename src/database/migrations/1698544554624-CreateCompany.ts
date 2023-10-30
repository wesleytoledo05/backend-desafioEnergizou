import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCompany1698544554624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "companies",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "nameClient",
                        type: "varchar",

                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true

                    },
                    {
                        name: "password",
                        type: "varchar",

                    },
                    {
                        name: "companyname",
                        type: "varchar",

                    },
                    {
                        name: "cnpj",
                        type: "bigint",
                    },
                    {
                        name: "cep",
                        type: "bigint",
                    },
                    {
                        name: "address",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "int",
                    },
                    {
                        name: "phone",
                        type: "bigint",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("companies")
    }

}
