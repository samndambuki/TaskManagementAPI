// THIS CODE SETS UP AN EXPRESS SERVER

//importing the requires modules
//express is the framework for creating web applications
import express, { json } from "express";

//middleware that allows cross origin requests allowing our server to interact with different domains
import cors from 'cors';


//express is a web application framework for node.js
//provides tools and utilities for building web applications and APIs

//app - represents express application and will be used to define routes, middleware and other functionalities
//create express server 

//we are creaing an instance of express application called app
//app will be used to define routes middleware and other functionalities
//main object we use to configure and define various aspects of our server
const app = express();


//we are telling our appication to use cors middleware 
//cors - cross origin resource sharing
//allows requests from an origin(*) to access our server
//can be helpful during development to prevent browser security regulations
//.use() - method to add middleware functions to our applications request processing pipeline
//we are using cors middleare and passing options object to it
app.use(cors({
    //we are allowing requests from any origin 
    //means that any domain or url can make requests to our server
    //in production it is a good practise to specify specific origins 
    //to enhance security and prevent unauthorized access
    origin: "*"
}));


//we are using json middleware 
//transforms data into a format that our server and application can understand and work with
app.use(json())// middleware

//define the port number
//this is the port on which the server will listen
//listen to incoming requests
//checks if there is an ebvironment variable called port that could be set expternally
const PORT = process.env.PORT || 3000;

//defines the root url /
//when a client makes a GET request to root URL the callback function (req,res) is executed

//we define a route for the route url
app.get('/',(req,res)=>{
    res.send("Hello, express server is running")
})

//start the server
//makes it listen on the specified port
//we are setting our express server to listen on the port we defined
app.listen(PORT,()=>{
    //when the server starts it wil log this message
    console.log(`Server is listening on port ${PORT}`)
})

//we are exporting app so that it can be used in other parts of our application or by other modules
export default app