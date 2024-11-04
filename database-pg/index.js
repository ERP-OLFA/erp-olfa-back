const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: '5432',
  password: 'root',
  database: 'school',
});

client.connect()

module.exports = client;