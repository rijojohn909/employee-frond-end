import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit{
  employees:any=[]
  searchKey=''
  constructor(private api:ApiService){

  }
    ngOnInit(): void {
      this.api.getAllEmployees()
      .subscribe((result:any)=>{
        console.log(result.employees);
        
  this.employees = result.employees
  console.log(this.employees);
  
      })
  }
   //search
 search(event:any){
  this.searchKey = event.target.value
  
}
}
