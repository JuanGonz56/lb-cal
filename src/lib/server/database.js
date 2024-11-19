
import postgres from 'postgres'

// see env variables in .env
import {PGCONNECT} from '$env/static/private';
console.log("Connect is ",PGCONNECT)

const sql = postgres(PGCONNECT, {} )

export default sql;
