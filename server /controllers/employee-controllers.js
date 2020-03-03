


const Employee = require('../models/employee');


const employeeCtrl = {};  //just object define



// define the consultation in the server 
employeeCtrl.getEmployees =  async (req, res, next) =>{// find the employees and save it in the const employees 
       const employees = await Employee.find();  
       res.json(employees);                                          // send the dates to the server
    
};


employeeCtrl.createEmployee = async (req, res, next) =>{
  const employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
});
await employee.save();
res.json({status: 'Employee created'});
};


                                         // req.body and req.params to send and recived dates 
                                        
 

employeeCtrl.getEmployee = async (req, res, next)=>{                       // to search before in the localhost only by the ID 
       const employee = await Employee.findById(req.params.id);  
       res.json(employee);
};


employeeCtrl.editEmployee = async (req, res, next)=>{
   const { id } = req.params;                         // another variante (req.params._id, {$set: employee}, {new: true});
   const employee = {
       name: req.body.name,
       position: req.body.position,
       office: req.body.office,
       salary: req.body.salary

   };
   
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: "employee update"});
};


employeeCtrl.deleteEmployee =  async (req, res, next)=>{
    await Employee.findByIdAndDelete(req.params.id)
     res.json({status: "employee delete"});
   
};





module.exports = employeeCtrl; 

