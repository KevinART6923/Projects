import oracledb from "oracledb";
import { configOracle } from "../../config/dbConfig.js";

let connection;

// ? Función para establecer una conexión con la base de datos Oracle
export const oracleConn = async () => {
  try {
    // Intenta establecer una conexión con la base de datos Oracle usando la configuración proporcionada
    connection = await oracledb.getConnection(configOracle);
    // * ✅ Conexión exitosa a la base de datos Oracle
    console.log("Conexión exitosa a la base de datos Oracle. ✔️");
    return connection;
  } catch (e) {
    // ! ❌ Error en la conexión
    console.error("❌ Error en la conexión:", e.message);
    // ! Lanza el error para que sea manejado por el llamador
    throw e;
  }
};

// ? Función para cerrar la conexión con la base de datos Oracle
export const oracleClose = async () => {
  if (connection) {
    try {
      // ? Intenta cerrar la conexión con la base de datos
      await connection.close();
      // * ✅ Conexión con la BD Oracle cerrada correctamente
      console.log("Conexión con la BD Oracle cerrada correctamente. ✔️");
    } catch (e) {
      // ! ❌ Error al cerrar la conexión
      console.error(" ❌ Error al cerrar la conexión:", e.message);
    }
  }
};
