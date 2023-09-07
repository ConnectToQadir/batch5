const express = require('express')
const app = express()
const studentsRoutes = require('./routes/students')
const mongoose = require('mongoose')



app.use(express.json())
app.use('/api/students',studentsRoutes)



mongoose.connect('mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/batch5?retryWrites=true&w=majority').then((res)=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err.message)
})



app.listen(3000, () => {
    console.log("server is running")
})