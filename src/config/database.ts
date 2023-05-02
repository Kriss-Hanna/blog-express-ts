import { Sequelize } from "sequelize";

// Creation instance sequelize for postgres

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Launch connection

sequelize
  .authenticate()
  .then(() => console.log("Database connected."))
  .catch((err) => console.log("Unable to connect the database: ", err));

export default sequelize;
