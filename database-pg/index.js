const { Client } = require('pg');

const connectionString = 'postgresql://erp_olfa_72ve_user:VgXjllm9XqxVBL7zFjtmNc17t6Crzc4k@dpg-ct85bn68ii6s73ccvhjg-a.oregon-postgres.render.com/erp_olfa_72ve';

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
