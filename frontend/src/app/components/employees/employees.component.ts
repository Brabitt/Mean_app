import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { Form, NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;      // variable to connect whit the function M toast from materialize

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }    // conection with the employee.service.ts --- routes post, put , delete and get

  ngOnInit(){                       // dates from the server starting
    this.getEmployees();
  }

  addEmployee(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployees();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.employeeService.postEmployee(form.value)
      .subscribe(res => {
        this.getEmployees();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }

  }

  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(res =>{
      this.employeeService.employees = res as Employee[];
      console.log(res);

    });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {    // show alert to confirm if you want delete the item
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }

  }

}
