var router = require('express').Router()
var studentModel = require('../models/students')


// Create
router.post('/',async function (req, res) {
    await studentModel.create(req.body)
    res.send("Student Enrolled Successfully!")
})


// Read
router.get('/',async function (req, res) {
    var students = await studentModel.find()
    res.json(students)
})


// Update
router.put('/',async function (req, res) {
    await studentModel.findByIdAndUpdate(req.query.id,{$set:req.body})
    res.send("Student Updated Successfully!")
})

// Delete
router.delete('/',async function (req, res) {
    await studentModel.findByIdAndDelete(req.query.i)
    res.send("Student Deleted Successfully!")
})



module.exports = router