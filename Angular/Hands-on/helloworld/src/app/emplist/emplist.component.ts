import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee['name']}}</li>
    </ul>
  `,
  styles: []
})
export class EmplistComponent implements OnInit {

  public employees:any =[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }
}