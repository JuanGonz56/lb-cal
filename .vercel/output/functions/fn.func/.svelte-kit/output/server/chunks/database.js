import postgres from "postgres";
import { P as PGCONNECT } from "./private.js";
console.log("Connect is ", PGCONNECT);
const sql = postgres(PGCONNECT, {});
export {
  sql as s
};
