import { oracleConn, oracleClose } from "../db/connections/oracleConection.js";

// ? Función para consultar la base de datos Oracle
export const consulOracle = async () => {
  let connection;
  try {
    // Establece una conexión con la base de datos Oracle
    connection = await oracleConn();
    // Define la consulta SQL para obtener las primeras 10 filas de la tabla TWHCHA253120
    const sql = `SELECT T$DSCA FROM TWHCHA253120 WHERE ROWNUM <= 10`;
    // Ejecuta la consulta SQL
    const result = await connection.execute(sql);
    const res = result.rows;
    // * ✅ Consulta ejecutada exitosamente
    console.log("Consulta ejecutada exitosamente.✔️");
    console.log(res);
  } catch (e) {
    // ! ❌ Error en la consulta
    console.error(" ❌ Error en la consulta:", e.message);
    // Lanza el error para que sea manejado por el llamador
    throw e;
  }
};
