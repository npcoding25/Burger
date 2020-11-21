const express = require('express')
const router = express.Router()

const burger = require('../models/burger.js')

// Route to display page
router.get("/", async function(req, res) {
    const burgers = await burger.getAllBurgers()
    
    res.render('index', {burgers})
});

router.post('/api/burgers', async function(req, res) {

    const burgerName = req.body.burger_name;
    const result = await burger.addBurger(burgerName);
    res.send({result})
})

// router.put('/api/burgers/:id', async function(req, res) {
//     console.log(`[put request]`, req.params)
//     console.log(req.body.devoured)
//     const burgerId= req.params.id;
//     console.log(burgerId);
//     const devoured = req.body.devoured;
//     const result = await burger.eatBurger();
//     res.json(result)
//     // const devourBurger = await burger.eatBurger(req.params.id)
//     // console.log(devourBurger)
//     // res.send(devourBurger)
// })

module.exports = router