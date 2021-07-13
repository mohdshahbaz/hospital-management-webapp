import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from 'src/app/service/patients.service';

@Component({
  selector: 'app-add-update-patient',
  templateUrl: './add-update-patient.component.html',
  styleUrls: ['./add-update-patient.component.css']
})
export class AddUpdatePatientComponent implements OnInit {

  patientForm!: FormGroup;
  isAddMode!: Boolean;
  loading!: Boolean;
  submitted!: Boolean;
  _id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private patientService: PatientsService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.buildPatientForm();

    if(!this.isAddMode) {
      this._id = this.route.snapshot.params['_id'];
      this.isAddMode = !this._id;
    }

    if(!this.isAddMode) {
      this.patientService.GetPatientById(this._id).subscribe(res => {
        this.patientForm.patchValue(res);
      })
    }
  }

  buildPatientForm() {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      covid: [false, Validators.required]
    });
  }

  get f() {
    return this.patientForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if(this.patientForm.invalid) {
      return;
    }

    this.loading = true;

    if(this.isAddMode) {
      this.createPatient();
    } else {
      this.updatePatient();
    }

    console.log(this.patientForm.value);
  }

  createPatient() {
    this.patientService.CreatePatient(this.patientForm.value).subscribe(res => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })
    .add(() => this.loading = false);
  }

  updatePatient() {
    this.patientService.UpdatePatient(this._id, this.patientForm.value).subscribe(res => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    })
    .add(() => this.loading = false);
  }

}
