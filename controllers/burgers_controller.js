const express = require('express')
const router = express.Router()

const burger = require('../models/burger.js')

// Route to display page
router.get("/", async function(req, res) {
    const burgers = await burger.getAllBurgers()
    
    res.render('index', {burgers})
});

router.post('/api/burgers', async function(req, res) {
    // let allBurgers = []
    // const burgers = await burger.getAllBurgers()
    // console.log(`[post] looking in getAllBurgers`, burgers)
    // allBurgers.push(burgers)
    // console.log(`[post] pushing array`, allBurgers)

    const burgerName = req.body.burger_name;
    const result = await burger.addBurger(burgerName);
    res.send({result})
    // const createBurger = await burger.addBurger(req.body.name)
    // console.log(createBurger)
    
    // res.send(createBurger)
})

router.put('/api/burgers/:id', async function(req, res) {
    console.log(`[put request]`, req.params)
    console.log(req.body.devoured)
    const burgerId= req.params.id;
    console.log(burgerId);
    const devoured = req.body.devoured;
    console.log('checking devoured...', devoured)
    const result = await burger.eatBurger(burgerId, devoured);
    res.json(result)
    // const devourBurger = await burger.eatBurger(req.params.id)
    // console.log(devourBurger)
    // res.send(devourBurger)
})

module.exports = router