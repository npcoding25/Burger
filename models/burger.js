const orm = require('../config/orm.js')

function getAllBurgers() {
  return orm.selectAll('burgers');
}

function addBurger(name) {
  return orm.insertOne('burgers', { burger_name: name });
}

function eatBurger(id) {
  return orm.updateOne('burgers', { devoured: true }, { id });
}

module.exports = {getAllBurgers, addBurger, eatBurger}