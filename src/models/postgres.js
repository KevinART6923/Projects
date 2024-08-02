import {
  postgresConn,
  postgresClose,
} from "../db/connections/postgresConection.js";

// ? Función para consultar la base de datos PostgreSQL
export const consulPostgres = async () => {
  let connection;
  try {
    // Establece una conexión con la base de datos PostgreSQL
    connection = await postgresConn();
    // Ejecuta una consulta SQL para obtener todos los registros de la tabla "convenios"
    const sql = await connection.query("SELECT * FROM convenios;");
    const res = sql.rows;
    // * ✅ Consulta ejecutada exitosamente
    console.log("Consulta ejecutada exitosamente.✔️");
    console.log(res);
  } catch (e) {
    // ! ❌ Error en la consulta
    console.error("❌ Error en la consulta:", e.message);
  }
};
