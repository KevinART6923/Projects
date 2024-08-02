import pg from "pg";
const { Client } = pg;
import { configPostgres } from "../../config/dbConfig.js";

let client;

export const postgresConn = async () => {
  try {
    client = new Client(configPostgres);
    await client.connect();
    console.log("Conexión exitosa a la base de datos Postgres. ✔️");
    return client;
  } catch (e) {
    console.error(" ❌ Error en la conexión:", e.message);
    throw e;
  }
};

export const postgresClose = async () => {
  if (client) {
    try {
      await client.end();
      console.log("Conexión con la BD Postgres cerrada correctamente. ✔️");
    } catch (e) {
      console.error(" ❌ Error al cerrar la conexión:", e.message);
    }
  }
};
