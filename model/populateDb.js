const { Client } = require('pg');

require('dotenv').config();
// const connect = process.env.DEV_CONNECT;
const connect = process.env.PROD_CONNECT;
const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS messages (
  message_Id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author_id INTEGER REFERENCES users(id),
  message TEXT NOT NULL,
  date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

`;

async function main() {
    console.log('seeding.....');
    const client = new Client({
        connectionString: connect
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('Done');
}

module.exports = {main};