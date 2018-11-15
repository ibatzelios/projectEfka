import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { user } from '../models/userModel';
import { loginModel } from '../models/loginModel';
import { appointment } from '../models/appointment';
import { Observable } from 'rxjs';
import { catchError } from "../../../node_modules/rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  login(loginData: loginModel) {
    localStorage.setItem('token', 'true');
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .post(this.baseUrl + '/login', loginData, { headers })
      .pipe(
        catchError((err) => {
          return err;
        })
      );
  }

  register(user: user): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .post(this.baseUrl + '/register', user, { headers })
      .pipe(
        catchError((err) => {
          return err;
        })
      );
  }

  getDoctorsSpecialtys() {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .get(this.baseUrl + '/userhomepage/newappointment', { headers })
      .pipe(
        catchError((err) => {
          return err;
        })
      );
  }

  getDoctorsNames(specialty) {
    let headers = new HttpHeaders();
    let params = new HttpParams().set("specialty", specialty);
    headers.append('Content-type', 'application/json');
    return this.http
      .get(this.baseUrl + '/userhomepage/newappointment/doctorsname', { headers, params })
      .pipe(
        catchError((err) => {
          return err;
        })
      );
  }
  setNewAppointment(appointment: appointment){
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
      .post(this.baseUrl + '/userhomepage/newappointment', appointment, { headers })
      .pipe(
        catchError((err) => {
          return err;
        })
      );
  }
  getFilteredAppointments(doctorSpecialty, appointmentDateFrom, appointmentDateTo){
    let headers = new HttpHeaders();
    let params = new HttpParams().set("doctorSpecialty", doctorSpecialty).set("appointmentDateFrom", appointmentDateFrom).set("appointmentDateTo", appointmentDateTo);
    headers.append('Content-type', 'application/json');
    return this.http
      .get(this.baseUrl + '/userhomepage/searchappointment', { headers, params })
      .pipe(
        catchError((err) => {
          return err;
        })
      );
  }
}
