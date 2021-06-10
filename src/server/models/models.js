const { Pool } = require('pg');
require('dotenv').config();


// const PG_URI = process.env.pgURI;
const PG_URI = 'postgres://yepeyyad:LalHHAsNXL6UoaA0FPgA3uv6MARnkOD6@batyr.db.elephantsql.com/yepeyyad';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

console.log('Connected to DB...')

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    // console.log('Connected to DB... executed query', text);
    return pool.query(text, params, callback);
  }
};
