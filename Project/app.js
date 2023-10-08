const express = require('express');
const students = require('./Routes/students')
const categories = require('./Routes/categories');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://127.0.0.1/learningPlatform')
.then(()=> console.log('connection is successful'))
.catch(err=> console.error('Couldnot connect to mongoDB. err'))

app.use(express.json());
app.use('/api/categories', categories);
app.use('/api/students', students);
app.use('/api/courses', Courses);

//app.use(express);






const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is listenig on port ${port}`);
})