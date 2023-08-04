import express, { json } from "express";
import cors from 'cors';


//express is a web application framework for node.js
//provides tools and utilities for building web applications and APIs

//app - represents express application and will be used to define routes, middleware and other functionalities
//create express server 

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(json())// middleware

//define the port number
//this is the port on which the server will listen
const PORT = process.env.PORT || 3000;


//defines the root url /
//when a client makes a GET request to root URL the callback function (req,res) is executed
app.get('/',(req,res)=>{
    res.send("Hello, express server is running")
})

//start the server
//makes it listen on the specified port
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

export default app