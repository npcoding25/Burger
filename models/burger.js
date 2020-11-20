const orm = require('../config/orm.js')

function getAllBurgers() {
  return orm.selectAll('burgers');
}

function addBurger(burger_name) {
  return orm.insertOne(burger_name);
}

function eatBurger(id, devoured) {
  return orm.updateOne(id, devoured);
}

module.exports = {getAllBurgers, addBurger, eatBurger}