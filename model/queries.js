const pool = require('./pool');

const getUser = async () =>{
    const { rows } = await pool.query(`SELECT username,message,date FROM users LEFT JOIN messages on users.id = messages.author_id`);
    return rows;
}

const addUser = async(username,message) => {
    await pool.query('INSERT INTO users (username) VALUES ($1)', [username]);
    const result = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
    const userId = result.rows[0]?.id; 
    await pool.query("INSERT INTO messages (author_id,message) VALUES ($1, $2)", [userId,message])
}

module.exports ={getUser, addUser};