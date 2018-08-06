const pg = require('pg');
const pkg = require('../../package.json');

const dbName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');
const dbURL = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`

const client = new pg.Client(dbURL);

module.exports = client;
