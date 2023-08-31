const express = require('express')
const app = express()
const productRoutes = require('./routes/products')
const customerRoutes = require('./routes/customers')




app.use('/api/products',productRoutes)
app.use('/api/customers',customerRoutes)





app.listen(3000, () => {
    console.log("server is running")
})