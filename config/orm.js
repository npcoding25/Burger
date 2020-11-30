const db = require('./connection.js')

// Get all burgers from database
function selectAll() {
  return db.query('SELECT * FROM burgers');
}

// Insert burger into database
function insertOne(burger_name) {
  return db.query('INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', [burger_name, false]);
}

// Update burger in database
function updateOne(id, devoured) {
  console.log(`[updateOne] UPDATE burgers SET devoured ? WHERE id = ?`,  [devoured ? 1 : 0, id])
  return db.query('UPDATE burgers SET devoured = ? WHERE id = ?', [devoured ? 1 : 0, id]);
}
  
module.exports = {selectAll, insertOne, updateOne}