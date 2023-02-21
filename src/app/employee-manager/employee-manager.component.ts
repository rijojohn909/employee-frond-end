import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {
  searchKey=''
  employees:any=[]
  employeelist:any=[]
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

// remove employee
deleteemployee(employeeId:any) {
  this.api.deleteemployee(employeeId).subscribe( 
    // 200
    (result:any)=>{
      console.log(result);
      
  this.employeelist = result.employeelist
  window.location.reload()
  // if(this.employeeist.length==0){
  // }
  },
  // 400
  (result:any)=>{
    alert(result.error.message)
  }
  )
    }

}
