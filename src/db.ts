import { Pool } from "pg";  


const connectionString = 'postgres://xxxxxxxxxxxxxx'
const db = new Pool({connectionString});



export default db;
