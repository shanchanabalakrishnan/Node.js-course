const mongoose = require('mongoose');
const router = express.Router();



const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlenghth:30
    },
    
    enrolled: {
        type: Boolean,
        default: false
    },
    
    phone: {
        type: String,
        required: true,
        minlength:10,
        maxlength: 25
    }
    
    })
    
    
    const Student =  new mongoose.model('Student', studentSchema)
    

    function validateData(student){
        const schema = {
          name : Joi.string().min(3).max(50).require(),
          Phone: Joi.string(),
          isEnrolled: Joi.Boolean()
        }
        return Joi.validate(student, schema)
      }

      exports.Student = Student
      exports.validateData - validateData