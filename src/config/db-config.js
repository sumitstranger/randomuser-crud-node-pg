//@ts-check
let appConfig = require('./app-config');
const pg = require('pg');
const connectionString = `postgresql://${appConfig.DB_USER}:${appConfig.DB_PASSWORD}@${appConfig.DB_HOST}:${appConfig.DB_PORT}/${appConfig.DB_DATABASE}`
const format = require('pg-format');

const db = new pg.Pool({
  connectionString: connectionString,
  max: 20
})

db.on('error', (err, client) => {
  console.error(new Date(), 'error on db', err, client);
})

function multiInsertTableFormatter(tableName, data, tableCols) {
  let insertDataValList = data.map(d => tableCols.map(column => d[column]));
  let insertDataCols = tableCols.join(', ');
  let insertQuery = ` INSERT INTO ${tableName} ( ${insertDataCols} ) VALUES %L `;
  insertQuery = format(insertQuery, insertDataValList);
  return [insertQuery];
}

module.exports = {db, multiInsertTableFormatter};