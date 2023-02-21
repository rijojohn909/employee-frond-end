import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  loginForm = this.fb.group({
    // array
    uname:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],

    pswd:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
   



  })

aname="admin"
password="admin"
  constructor(private fb:FormBuilder, private router:Router){ }

  login(){
    if(this.loginForm.valid){
      let uname = this.loginForm.value.uname

    let pswd = this.loginForm.value.pswd
    if(uname==this.aname && pswd==this.password){
      this.router.navigateByUrl('employee/admin')
    }
    else
    {
      alert('Invalid Credentilas')
    }

    }
    else
    {
      alert('Invalid Credentilas')
    }

}
}