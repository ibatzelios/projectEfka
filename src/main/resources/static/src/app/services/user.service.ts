import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { user } from '../models/userModel';
import { loginModel } from '../models/loginModel';
import { appointment } from '../models/appointment';
import { Observable, throwError } from 'rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;
  private headers = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private http: HttpClient) { }

  // private handleError(errorResponce: HttpErrorResponse) {
  //   if (errorResponce.error instanceof ErrorEvent) {
  //     console.log('Client Side Error: ', errorResponce);
  //   } else {
  //     console.log('Server Side Error: ', errorResponce);
  //   }
  //   return throwError('Something went wrong !!');
  // }
  login(loginData: loginModel) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    const FD = new FormData();
    FD.append('username', loginData.username);
    FD.append('password', loginData.password);
    return this.http
      .post(this.baseUrl + '/login', FD, { headers: headers })
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  register(user: user): Observable<any> {
    return this.http
      .post(this.baseUrl + '/register', user, { headers: this.headers });
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  getDoctorsSpecialtys() {
    return this.http
      .get(this.baseUrl + '/userhomepage/newappointment', { headers: this.headers })
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  getDoctorsNames(specialty) {
    const params = new HttpParams().set('specialtyId', specialty);
    return this.http
      .get(this.baseUrl + '/userhomepage/newappointment/doctorsname', { headers: this.headers, params })
      // .pipe(
      //   catchError(this.handleError)
      // );
  }
  setNewAppointment(appointment: appointment) {
    return this.http
      .post(this.baseUrl + '/userhomepage/newappointment', appointment, { headers: this.headers })
      // .pipe(
      //   catchError(this.handleError)
      // );
  }
  getFilteredAppointments(doctorSpecialty, appointmentDateFrom, appointmentDateTo) {
    const params = new HttpParams().
      set('doctorSpecialty', doctorSpecialty)
      .set('appointmentDateFrom', appointmentDateFrom)
      .set('appointmentDateTo', appointmentDateTo);
    return this.http
      .get(this.baseUrl + '/userhomepage/searchappointment', { headers: this.headers, params })
      // .pipe(
      //   catchError(this.handleError)
      // );
  }
  getAllAppointments() {
    return this.http.get(this.baseUrl + '/userhomepage/editappointment/edit', { headers: this.headers })
      // .pipe(
      //   catchError(this.handleError)
      // );
  }
  deleteAppointment(id) {
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.baseUrl + '/userhomepage/editappointment/edit', { headers: this.headers, params })
      // .pipe(
      //   catchError(this.handleError)
      // );
  }
}
