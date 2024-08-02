// * Importa las funciones para manejar conexiones a PostgreSQL y Oracle
import { postgresConn } from "./connections/postgresConetion.js";
import { postgresClose } from "./connections/postgresConetion.js";
import { oracleConn, oracleClose } from "./connections/oracleConection.js";

// ? Exporta las funciones de conexión y cierre para PostgreSQL y Oracle
export { postgresConn, postgresClose, oracleConn, oracleClose };
