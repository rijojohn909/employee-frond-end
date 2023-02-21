import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path:'' ,redirectTo:'/employee/data',pathMatch:'full'
  },
  {path:'employee/data', component:EmployeeDataComponent},
  {
    path:'employee/admin' , component:EmployeeManagerComponent
  },
  {
    path:'employee/add' , component:AddEmployeeComponent
  },
  {
    path:'employee/edit/:contactId', component:UpdateEmployeeComponent
  },
  {
  path:'employee/view/:contactId' , component:ViewEmployeeComponent
  },
  {
    path:'admin/login' , component:AdminLoginComponent
  },
  {
    path:'**' , component:PagenotFoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
