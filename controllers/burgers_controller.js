const express = require('express')
const router = express.Router()

const burger = require('../models/burger.js')

// Route to display page
router.get("/", async function(req, res) {
    const burgers = await burger.getAllBurgers()
    
    res.render('index', {burgers})
});

router.post('/burger/create', async function(req, res) {
    // let allBurgers = []
    // const burgers = await burger.getAllBurgers()
    // console.log(`[post] looking in getAllBurgers`, burgers)
    // allBurgers.push(burgers)
    // console.log(`[post] pushing array`, allBurgers)
    const createBurger = await burger.addBurger(req.body.name)
    console.log(createBurger)
    
    res.send(createBurger)
})

router.put('/burger/eat/:id', async function(req, res) {
    const devourBurger = await burger.eatBurger(req.params.id)
    console.log(devourBurger)
    res.send(devourBurger)
})

module.exports = router