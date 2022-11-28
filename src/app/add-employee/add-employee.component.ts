import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  code=""
  name=""
  designation=""
  salary=""
  phone=""
  email=""
  company=""
  experience=""

  readValues=()=>{

    let employees = {
      "code":this.code,
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "phone":this.salary,
      "email":this.email,
      "company":this.company,
      "experience":this.experience

    }
    console.log(employees)
  }
}
