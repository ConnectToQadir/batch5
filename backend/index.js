const express = require('express')
const app = express()
const studentsRoutes = require('./routes/students')
const mongoose = require('mongoose')



app.use(express.json())
app.use('/api/students',studentsRoutes)



mongoose.connect('mongodb://127.0.0.1:27017/batch5').then((res)=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err.message)
})



app.listen(3000, () => {
    console.log("server is running")
})