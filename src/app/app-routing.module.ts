import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdatePatientComponent } from './component/add-update-patient/add-update-patient.component';
import { PatientsComponent } from './component/patients/patients.component';

const routes: Routes = [
  {
    path: "",
    component: PatientsComponent
  },
  {
    path: "add",
    component: AddUpdatePatientComponent
  },
  {
    path: "edit/:_id",
    component: AddUpdatePatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
