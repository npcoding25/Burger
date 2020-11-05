const db = require('./connection.js')
const connection = require('./connection.js')

async function selectAll() {
    const sql = await db.query('SELECT * FROM burgers')

}

async function insertOne() {
    const sql = await db.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)')

}

async function updateOne() {
    const sql = await db.query('UPDATE burgers SET ? WHERE ?')

}

module.exports = {selectAll, insertOne, updateOne}