const mongoose = require('mongoose');

const router = express.Router();







const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlenghth:30
    }
    
    })
    
    
    const Category =  new mongoose.model('Category', categorySchema)
    



    function validateData(category){
        const schema = {
          name : Joi.string().min(3).require()
        }
        return Joi.validate(category, schema)
      }


      exports.Category = Category
      exports.categorySchema = categorySchema
      exports.validateData = validateData
      