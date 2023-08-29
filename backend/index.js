const express = require('express')
const app = express()


app.set('view engine','ejs')
app.use(express.static('public'))



app.post("/",(req,res)=>{
    console.log(req.query)

    res.render('index')
})



app.listen(808,()=>{
  console.log("Server is Running...")  
})