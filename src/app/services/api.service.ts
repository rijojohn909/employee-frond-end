import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

   //all-employee api
   getAllEmployees(){
    return  this.http.get('http://localhost:3000/all-employees')
    }
     // saveemployee
     saveemployee(id:any,ename:any,email:any,photo:any,mobile:any,title:any,salary:any){

      const body={
        id,
        ename,
        email,
        photo,
        mobile,
        title,
        salary
      }
      // server call to register an employee and return response to saveemployee component
      return this.http.post('http://localhost:3000/saveemployee',body)
    }
  
       // remove-employee/:employeeId api call
   deleteemployee(employeeId:any){
    return this.http.delete('http://localhost:3000/removeemployee/'+employeeId)
  }

   // view-employee api call
   viewemployee(empId:any){
    return this.http.get('http://localhost:3000/view-employee/'+empId)
   }
}
