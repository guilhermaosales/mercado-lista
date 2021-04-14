const Pool = require('pg').Pool;
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DEV_DATABASE_URL
});

pool.on('connect', () => {
    console.log('Database connected successful!');
});

module.exports = pool;