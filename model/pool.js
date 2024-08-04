const { Pool } = require('pg');
require('dotenv').config();

// const connect = process.env.DEV_CONNECT;
const connect = process.env.PROD_CONNECT;


module.exports = new Pool({
    connectionString: connect,
})