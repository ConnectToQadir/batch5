var router = require('express').Router()



router.get('/', function (req, res) {
    res.send("These are your Customers")
})


router.get('/add', function (req, res) {
    res.send('this api will add customer in DB')
})




module.exports = router