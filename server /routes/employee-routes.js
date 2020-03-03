// create server routes 

const express = require("express");
const router = express.Router(); // express.Router = agree properties to export 

const employee = require('../controllers/employee-controllers'); // contain all the fuctions for the employees 



// difine routes  

router.get("/", employee.getEmployees); 
router.post("/", employee.createEmployee);
router.get("/:id",employee.getEmployee);
router.put("/:id", employee.editEmployee); 
router.delete("/:id", employee.deleteEmployee);


module.exports = router; 

