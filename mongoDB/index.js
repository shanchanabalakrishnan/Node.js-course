const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('connection is succesful'))
.catch(err=> console.error('Couldnot connect to mongoDB. err'))


//schema

const courseSchema = new mongoose.Schema({
name: {type: String, required: true,  minlength: 5, maxlength: 200},

tags:{type: Array, validate: {
    validator: function(tag){
        return tag.length > 1
    }
}},

category: {
    type: String,
    required: true,
    enum: ['DSA', 'Web', 'Mobile', 'Data Science']
},


creator: {type: String, required: true },
publishedDate: {type: Date, default: Date.now},
isPublished: {type: String, required: true},
rating: {type: Number, required: function(){return this.isPublished}}

})



 const Course = mongoose.model('Course', courseSchema)


 async function createCourse(){
    const course = new Course({
        name: 'MongoDB',
        tags: ['express', 'mongoDB'],
        category: 'DSA',
        creator: 'Adam',
        isPublished: true,
        rating: 4.5
 })

 try{

    const result = await course.save()
 console.log(result);
 }catch(error){
    for(field in error.errors[field])
console.error(error.message);
 }

 
}


 
 

//  async function createCourse(){
//     const course = new Course({
//         name: 'Python',
//         creator: 'Abi',
//         isPublished: true,
//         rating: 4.1
//  })

//  const result = await course.save()
//  console.log(result);
// }

createCourse();



//rating
//equal(eq)
//gte(greater than equal to)
//lte
//lt

//in
//not in



//get Course

async function getCourses(){

    const courses = await Course.find({rating: {$in : [4.2, 4.1]}}).select({name: 1});
    console.log(courses);
}

getCourses();



async function updateCourse(id){

    let course = await Course.findById(id)
    if(!course) return;
    course.name = 'Python'
    course.creator = 'Abi'
    const updatedCourse = await course.save()
    console.log(updatedCourse);

}
 //updateCourse('65130b70b580b251d4c61179');

 //deletecourse

 async function deleteCourse(id){
    let course = await Course.findByIdAndRemove(id)
    console.log(course);
 }
 deleteCourse('6517027781aa639874a2ebd6');



