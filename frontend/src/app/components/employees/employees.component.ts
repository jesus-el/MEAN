import { Component, OnInit } from '@angular/core';

import {EmployeeService } from '../../services/employee.service'

import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }
  addEmployee(form: NgForm){
console.log(form.value)
  }
  resetfrom(form?: NgForm){
        if(form){
          form.reset();
          this.employeeService.selectedEmployee= new Employee();
        }
  }

}
