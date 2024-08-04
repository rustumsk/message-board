const { Pool } = require('pg');
require('dotenv').config();


const connection = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    host: process.env.PGHOST
}
let connect;
if (connection.host != undefined){
    connect = connection
}
else connect = process.env.CONNECTION;


module.exports = new Pool({
    connectionString: connect,
})