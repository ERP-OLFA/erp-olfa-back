const { Client } = require('pg');

// New connection string with updated credentials
const connectionString = 'postgresql://erp_olfa_databsv1_2_user:8hz75BufABPbPdfLjlWt5GG8LsqOfDdy@dpg-cts07mjtq21c73946p50-a.oregon-postgres.render.com/erp_olfa_databsv1_2';

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Connection error', err.stack));

// Export the client
module.exports = client;
