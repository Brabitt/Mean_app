const express = require("express");
app = express();
const morgan = require("morgan");
const cors = require("cors"); 

const { mongoose } = require('./server /database'); // connection whit monogodb (database)




// settings
app.set("port", process.env.PORT || 4000);


//Middlewares
app.use(morgan('dev')); 
app.use(express.json()); // to see the info from json into the shell
app.use(cors({origin: "http://localhost:4200"})); // to connect the both servers --- @angular and server 


//Routes
app.use('/api/employees',require('./server /routes/employee-routes')); 



//starting the server 
app.listen(app.get("port"),() => {
    console.log("server on port", app.get("port"));
});