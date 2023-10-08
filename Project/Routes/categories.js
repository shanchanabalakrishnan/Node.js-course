const express = require('express');
const Joi = require('joi');
const{Category, validateData} = require('../Models/categoriesModel');


// const categories = [

//     {id:1, name: 'web'},
//     {id:2, name: 'Mobile'},
//     {id:3, name: 'Photography'},

// ]


router.get('/', async (req, res) => {
    let categories = await Category.find()
    res.send(categories)
});



router.post('/', async(req, res)=> {

const {error} = validateData(req.body)
if(error){
     res.status(400).send(error.details[0].message)
}
    const category = new Category({
     
        name: req.body.name

    })
    await category.save();
    res.send(category);
});

router.put('/:id', async (req, res) =>{
    const category = await Category.findByAndUpdae(req.params.id, {name:req.body.params})
    const {error} = validateData(req.body)
    if(!category){
        return res.status(404).send('The category with the given ID was not found')}
    
     res.send(category);
});

router.delete('/:id', async(req, res) => {
    const category = await Category.findByAndRemove(req.params.id);
    if(!category){
     return res.status(404).send('The category with the given ID was not found')};

    

    res.send(category);

});

router.get('/:id', (req, res)=>{
    const category = Category.findById(req.params.id);
    if(!category) {
        return  res.status(404).send('The category with the given ID was not found')}
    res.send(category);
});




module.exports= router;