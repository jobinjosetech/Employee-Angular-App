import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  data:any = [
    {
      "name":"Jobin",
      "designation":"Software Engineer Trainee",
      "Salary":25000,
      "Company":"Nest",
    },
    {
      "name":"Joel",
      "designation":"Software Engineer",
      "Salary":35000,
      "Company":"UST"
    },
    {
      "name":"Yethi",
      "designation":"App Developer",
      "Salary":48000,
      "Company":"TCS"
    },
    {
      "name":"Vishnu",
      "designation":"Software Engineer Trainee",
      "Salary":25000,
      "Company":"Nest"
    },
    {
      "name":"Yedu",
      "designation":"System Engineer",
      "Salary":28000,
      "Company":"Infosys"
    },
    {
      "name":"Kiran",
      "designation":"System Engineer Trainee",
      "Salary":38000,
      "Company":"Infosys"
    },
    {
      "name":"Yedu",
      "designation":"System Engineer",
      "Salary":28000,
      "Company":"Infosys"
    }
  ]
}
