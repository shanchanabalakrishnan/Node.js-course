const express = require('express');

const {Category} = require('../Models/categoriesModel')
const mongoose = require('mongoose');
const {Course, validateData} = require('../Models/studentsModel');
const router = express.Router();


// const categories = [

//     {id:1, name: 'web'},
//     {id:2, name: 'Mobile'},
//     {id:3, name: 'Photography'},

// ]


router.get('/', async (req, res) => {
    const courses = await Course.find()
    res.send(courses)
});



router.post('/', async(req, res)=> {

const {error} = validateData(req.body)
if(error){
     res.status(400).send(error.details[0].message)
}

const category = await Category.findById(req.body.categoryId)
if(!category) return res.status(400).send('Invalid ID')
    let course = new Course({
     
        title: req.body.title,
        catrgory: {
         _id: category._id,
         name: category.name
        },
        creator: req.body.creator,
        rating: req.body.rating

    })
    course = await course.save();
    res.send(course);
});

router.put('/:id', async (req, res) =>{
   
    const {error} = validateData(req.body)

    
if(error){
     res.status(400).send(error.details[0].message)




const course = await Course.findByAndUpdae(req.params.id,


    {
     
        title: req.body.title,
        catrgory: {
         
        },
        creator: req.body.creator,
        rating: req.body.rating
    }, {new: true});
    




    if(!course){
        return res.status(404).send('The student with the given ID was not found')}
    
     res.send(course);
});

router.delete('/:id', async(req, res) => {
    const course = await Course.findByAndRemove(req.params.id);
    if(!course){
     return res.status(404).send('The course with the given ID was not found')};

    

    res.send(course);

});

router.get('/:id', (req, res)=>{
    const course = Course.findById(req.params.id);
    if(!student) {
        return  res.status(404).send('The course with the given ID was not found')}
    res.send(course);
});





module.exports= router;