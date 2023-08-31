var router = require('express').Router()



router.get('/', function (req, res) {
    res.send("These are your products")
})


router.get('/add-product', function (req, res) {
    res.send('this api will add your product in DB')
})




module.exports = router