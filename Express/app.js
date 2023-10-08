const express = require('express');
const morgan = require('morgan');
const myMiddlewareFunction = require('./middleware/middle')
const myMiddlewareFunction2 = require('./middleware/middle2')

const dotenv = require('dotenv').config()
const app = express();

app.use(express.json())
app.use(myMiddlewareFunction);

app.use(myMiddlewareFunction2)
app.use(morgan());



const courses = [
    
    {id:1, name:'Java Script'},
   { id:2, name: 'Java'},
    {id:3, name: 'Python'},

]
//get method or Read data

app.get('/', (req, res) => {
res.send('Hello from node.js course');
});

app.get('/about', (req, res) =>  {
res.send('We create impact');
})
app.get('/contact', (req, res) =>  {
res.send('We create contact');
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

//post method or Create data

app.post('/courses', (req, res) =>{

    const course = {
        id: courses.length +1,
        name: req.body.name

    }
    courses.push(course)
    res.send(course)
})

//put method or update data

app.put('/courses/:coursename', (req, res) => {
    
    let course = courses.find (course => course.name === req.params.coursename)
    if(!course)
res.status(404).send('The course you are looking for does not exist')

course.name = req.body.name
res.send(course)
 })

 //delete data

//  app.delete('/courses/:coureename', (req, res)=>{
//     let UpdateCourses = courses.filter(course => course.name !== req.params.coursename)
//     courses = UpdateCourses
//     res.send(courses)
//  })

app.delete('/courses/:id', (req, res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    console.log(course);
    if(!course)
    res.status(404).send('The course you are looking fordoes not exist')
const index = courses.indexOf(course)
courses.splice(index, 1)
res.send(course)

})




//routes parameters

app.get('/courses/:coursename', (req, res) => {
console.log(req.params)
let course = courses.find (course => course.name === req.params.coursename)

if(!course)
res.status(404).send('The course you are looking for does not exist')
res.send(course);

})

const port = process.env.PORT||3001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})