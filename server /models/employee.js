
// define schemas for mongodb // not to connect into the server 

const mongoose = require("mongoose");

const Schema  = mongoose.Schema;



const EmployeeSchema = new Schema ({                   // structure for schema 
    name : { type : String, required: true },
    position: { type : String, required: true },
    office: { type : String, required: true },
    salary: { type : Number, required: true }, 

});


module.exports = mongoose.model('employee', EmployeeSchema);  // schema view in mongoDB 