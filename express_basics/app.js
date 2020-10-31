const { response } = require("express");
const express = require("express");
// Requiring express package returns a function that creates an instance 
// of the express application
const app = express();

//Url: Uniform Resource Locator
//URL http://localhost:3000/hello_world
//scheme| address |Port |path
//      |    host      |
//The scheme indentifies the protocol
//being used to communicate ,could be HTTP,SSH,FTP,TCP,WS,WSS,SMTP ,etc..
//The "host" combines the address anf port , it identifies 
//the location of the server hosting the website
//The "path" identifies a specific web page
 

//Routers
//a route is a function that creates a response
//for a specific combination of HTTP VERB(METHOD) and
//url path

//The following method "get "is named after the HTTP verb. There is a similar
//method for each verb(eg GET,POST,PATCH,DELETE,OPTION Etc)
//Its arguments are in order :
 // A request and response objects
 //The request is an object  that represents the http request made by the client(i.e browser)
 //It contains the HTTP headers, any data , the URL, the http verb, etc.

// The "response" is an object that represents the server's response to client
//We build the response ourselves by calling methods on this object. We can specify
//data to be sent(e.g. HTML,files,JSON, etc), the HTTP headers and status code.
app.get("/hello_world",(request,response) => {
    //The method "send" of "response" take a string
    //and adds it to the response body,then terminates the response
    //sending it to client
    response.send('Hello world');
});

const PORT = 3000;
const ADDRESS = "127.0.0.1";

app.listen(PORT,ADDRESS, ()=>{
 console.log(`Server is listening at ${PORT}:${ADDRESS}`)
})