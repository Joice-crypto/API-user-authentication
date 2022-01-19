import { Pool } from "pg";  


const connectionString = 'postgres://ubjpeufw:CFOUMOe_PgUXVDHYSbQ-0AbTbEaPwRy0@kesavan.db.elephantsql.com/ubjpeufw'
const db = new Pool({connectionString});



export default db;
