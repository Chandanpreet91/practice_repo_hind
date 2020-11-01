const { response, request } = require("express");
const express = require("express");
// Requiring express package returns a function that creates an instance 
// of the express application
const app = express();
const path = require('path');


app.set("view engine","ejs");
//Middleware
//logger
//when using the 'morgon' middleware, call it with a string
//that describes the formatting of the logs
const logger = require("morgan");
app.use(logger('dev'));


//static Assets
//use path.join to combine string arguments into directory path
//for example
//path.join('/','home','users','hindreen');

//"_dirname" is a global variable available anywhere in any application
//that is run by node that runs the full directory path beginning from
//root('i.e. '/') to the location of the file where "__dirname" is used.
console.log("__dirname",__dirname);
//the static assets middleware will take all the files and directories
//at a specified path and the specify them publically with their own URL.
app.use(express.static(path.join(__dirname ,'public')));
//The live above connects oue public directory to express
//so that it can serve the browser those images,css files,
//browser side js,sound, video etc.

//Url: Uniform Resource Locator
//URL http://localhost:3000/hello_world
//scheme| address |Port |path
//      |    host      |
//The scheme indentifies the protocol
//being used to communicate ,could be HTTP,SSH,FTP,TCP,WS,WSS,SMTP ,etc..
//The "host" combines the address anf port , it identifies 
//the location of the server hosting the website
//The "path" identifies a specific web page
 
app.get("/",(request,response) => {
    //response.render(<ejs-file-path)
    //render a template located in "views",<ejs-file-path>
    //when writing file path,you can omit the extension
    
    //To call below,the file at ".views/welcome.ejs" is render
    //as HTML  and is sent as the body of the HTTP response
    //by our express server. Just like "response.send(<data>)",
    //response.render(<file-path) terminates response by sending
    //to the client
    response.render("welcome");
})

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
    response.send('Good Bye!,World');
});
//http://localhost:3000/thank_you?fullName=Chandanpreet&favouriteColor=Red&message=JavaScript
//after ? is our query(search)

//The query in the url is a way to encode data as key-value
//pairs in the URL itself. It is used by forms to store data from its input
//This is called URL encoding

//The encoding format is as follows:
//?key_1=value_1&key_2= value_2
//Express takes a query from URL and converts it into 
//an object as follows
//{key_1 : Value_1,key_2 : Value_2,key_3 : Value_3}
app.get('/thank_you',(request,response)=> {
    //request.query is a property that holds an object
    //representation of Url query
    const fullName = request.query.fullName;
    const favouriteColor = request.query.favouriteColor;
    const message = request.query.message;
    //below line is same as above lines
    //const {fullName,favouriteColor,message} = request.query
    console.log("requestQuery",request.query)
    response.render("thankYou",{
        fullName: fullName,
        favouriteColor : favouriteColor,
        message:message,
    });
})


app.get('/contact_us',(request,response)=>{
    console.log('url query',request.query)
   response.render("contactUs")
})
const PORT = 3000;
const ADDRESS = "127.0.0.1";

app.listen(PORT,ADDRESS, ()=>{
 console.log(`Server is listening at ${PORT}:${ADDRESS}`)
})