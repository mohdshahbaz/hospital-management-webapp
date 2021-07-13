import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private BASE_URL = "https://api-hospital-management.herokuapp.com/";
  // private BASE_URL = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }

  GetAllPatients() {
    return this.http.get(this.BASE_URL + 'patients');
  }

  GetPatientById(_id: string) {
    return this.http.get(this.BASE_URL + 'patient/' + _id);
  }

  CreatePatient(data: any) {
    return this.http.post(this.BASE_URL + 'patients', data);
  }

  UpdatePatient(_id:string, data: any) {
    return this.http.put(this.BASE_URL + 'patient/' + _id, data);
  }

  DeletePatient(_id:string) {
    return this.http.delete(this.BASE_URL + 'patient/' + _id);
  }


}
