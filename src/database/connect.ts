import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "invoiceauth",
  entities: ["src/app/models/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Conectado!')
    })
    .catch((error) => console.log(error))

export default AppDataSource