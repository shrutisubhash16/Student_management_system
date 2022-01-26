import express from "express";
import bodyParser from "body-parser";
import mongoose  from "mongoose";
import cors from 'cors';
import studentinfo from './routes/student.js'

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(bodyParser.json({limit:"20mb", extended : true}))    //json data cannot be greater than 20mb
app.use(bodyParser.urlencoded({limit:"20mb", extended : true})) 

app.use('/students',studentinfo);




const CONNECTION_URL = 'mongodb+srv://my_student_management:mystudent@studentmanagement.todux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';




mongoose.connect(CONNECTION_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(()=>app.listen(PORT, ()=>
    console.log(`Connection is established and running on port : ${PORT}`)
)).catch((err) => console.log(err.message));
