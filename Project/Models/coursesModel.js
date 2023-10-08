
const Joi = require('joi');
const mongoose = require('mongoose');
const {categorySchema} = require('../Models/categoriesModel');






    const Course =  mongoose.model('Course', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength:3,
        maxlenghth:255
    },
    category:{
                 type: categorySchema,
                 required: true,
    },
    
    creator: {
        type: Boolean,
        default: true,
    },
    
    rating: {
        type: Number,
        required: true,
        
    }
    
    }))
    

    
    

    function validateData(course){
        const schema = {
          title : Joi.string().min(3).max(50).require(),
          categoryId: Joi.string().requires(),
          creator: Joi.string().min(5).required(),
          rating: Joi.number().min(0).required()
        }
        return Joi.validate(course, schema)
      }

      exports.Student = Course
      exports.validateData - validateData