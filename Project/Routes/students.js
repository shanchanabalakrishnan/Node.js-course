const express = require('express');
const Joi = require('joi');
const {student, validateData} = require('../Models/studentsModel');


// const categories = [

//     {id:1, name: 'web'},
//     {id:2, name: 'Mobile'},
//     {id:3, name: 'Photography'},

// ]


router.get('/', async (req, res) => {
    let students = await Student.find()
    res.send(students)
});



router.post('/', async(req, res)=> {

const {error} = validateData(req.body)
if(error){
     res.status(400).send(error.details[0].message)
}
    const student = new Student({
     
        name: req.body.name,
        isEnrolled: req.body.isenrolled,
        phone: req.body.phone

    })
    await student.save();
    res.send(student);
});

router.put('/:id', async (req, res) =>{
    const student = await Student.findByAndUpdae(req.params.id, {name:req.body.params, phone: req.body.phone, isEnrolled: req.body.isEnrolled}, {new: true})
    const {error} = validateData(req.body)
    if(!student){
        return res.status(404).send('The student with the given ID was not found')}
    
     res.send(student);
});

router.delete('/:id', async(req, res) => {
    const student = await Student.findByAndRemove(req.params.id);
    if(!student){
     return res.status(404).send('The student with the given ID was not found')};

    

    res.send(student);

});

router.get('/:id', (req, res)=>{
    const student = Student.findById(req.params.id);
    if(!student) {
        return  res.status(404).send('The student with the given ID was not found')}
    res.send(student);
});





module.exports= router;