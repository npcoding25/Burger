const db = require('./connection.js')

// Get all burgers from database
function selectAll() {
  return db.query('SELECT * FROM burgers');
}

// Insert burger into database
function insertOne(burger_name, devoured) {
  return db.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', [burger_name, devoured]);
}

// Update burger in database
function updateOne(burger_name, devoured) {
  return db.query('UPDATE burgers SET devoured = ? WHERE ?', [burger_name, devoured]);
}
  
module.exports = {selectAll, insertOne, updateOne}