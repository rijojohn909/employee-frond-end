import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{
  empId:any;
  viewemployee:any=[]
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}

ngOnInit(): void {
  // fetch pathparameter from url
  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data);
    
    console.log(data['contactId']);
    this.empId=data['contactId']
  })

  // to get details of requested product
  this.api.viewemployee(this.empId).subscribe((result:any)=>{
    console.log(result.employee);
    this.viewemployee = result.employee
  })
}
}
