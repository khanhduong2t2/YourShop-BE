import { DataSource } from 'typeorm';
const dotenv = require('dotenv');
dotenv.config();
const { USERNAME_DB, PASSWORD_DB, DATABASE_NAME } = process.env;

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: USERNAME_DB,
    password: PASSWORD_DB,
    database: DATABASE_NAME,
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: []
  });

const connectDatabases = async () => {
    try {
        AppDataSource.initialize()
            .then(() => {
                console.log("Data Source has been initialized!")
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err)
            })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectDatabases;