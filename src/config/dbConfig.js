import dotenv from "dotenv";
dotenv.config(); // * Carga las variables de entorno desde un archivo .env

// ? Configuración para la conexión a la base de datos Oracle
export const configOracle = {
  user: process.env.DB_USER_ORACLE, // * Usuario para la base de datos Oracle
  password: process.env.DB_PASSWORD_ORACLE, // * Contraseña para la base de datos Oracle
  connectString: `${process.env.DB_HOST_ORACLE}/${process.env.DB_NAME_ORACLE}`, // * Cadena de conexión para Oracle
};

// ? Configuración para la conexión a la base de datos PostgreSQL
export const configPostgres = {
  host: process.env.DB_HOST_POSTGRES, // * Host para la base de datos PostgreSQL
  port: process.env.DB_PORT_POSTGRES, // * Puerto para la base de datos PostgreSQL
  user: process.env.DB_USER_POSTGRES, // * Usuario para la base de datos PostgreSQL
  password: process.env.DB_PASSWORD_POSTGRES, // * Contraseña para la base de datos PostgreSQL
  database: process.env.DB_NAME_POSTGRES, // * Nombre de la base de datos PostgreSQL
};
