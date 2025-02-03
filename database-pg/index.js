const { Client } = require('pg');

// New connection string with updated credentials
const connectionString = 'postgresql://erp_olfa_databsv1_3_user:LUPtVuYwcbszqPmmhV1Lx1ma54WiNlvv@dpg-cug7hr5ds78s738d33lg-a.oregon-postgres.render.com/erp_olfa_databsv1_3';

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to the new database'))
  .catch(err => console.error('Connection error', err.stack));

// Export the client
module.exports = client;
