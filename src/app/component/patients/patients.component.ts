import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/service/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  dataSource: any;

  displayedColumns: string[] = ['name', 'age', 'address', 'covid', 'action'];

  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientsService.GetAllPatients().subscribe(res => {
      this.dataSource = res;
    });
  }

  deletePatient(_id:string) {
    this.patientsService.DeletePatient(_id).subscribe(res => {
      this.getAllPatients();
      console.log(res);
    });
  }
}
