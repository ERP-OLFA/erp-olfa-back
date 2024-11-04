const { Client } = require('pg');

const connectionString = 'postgresql://erp_olfa_user:QBDKLOSgofnexVl14WLmaZJFriJiLqTw@dpg-cskasn8gph6c73a8elqg-a.oregon-postgres.render.com/erp_olfa';

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false, // Adjust based on your security requirements
  },
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Connection error', err.stack));

// Export the client
module.exports = client;
