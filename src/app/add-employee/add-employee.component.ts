import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  saveForm = this.fb.group({
    // array
    id:['',[Validators.required, Validators.pattern('[0-9]*')]],

    ename:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required]],
    photo:['',[Validators.required]],
    mobile:['',[Validators.required, Validators.pattern('[0-9]*')]],
    title:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    salary:['',[Validators.required, Validators.pattern('[0-9]*')]],



  })


  constructor(private fb:FormBuilder, private api:ApiService, private router:Router){ }

  saveemployee(){
    if(this.saveForm.valid){
      let id = this.saveForm.value.id

    let ename = this.saveForm.value.ename
    let email = this.saveForm.value.email
    let photo = this.saveForm.value.photo
    let mobile = this.saveForm.value.mobile
    let title = this.saveForm.value.title
    let salary = this.saveForm.value.salary




    this.api.saveemployee(id,ename,email,photo,mobile,title,salary).
    subscribe(
      // success
      (result:any)=>{
      alert(result.message)
      // navigate login
this.router.navigateByUrl('/employee/admin')

    },
    // client
    (result:any)=>{
      alert(result.error.message)
    })
    }
  else{
    alert("Invalid Form!!")
  }
  }



}
