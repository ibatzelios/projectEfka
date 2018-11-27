import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = environment.apiUrl;
  private headers = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private http: HttpClient) { }

  getFilteredAppointments(searchText, dateFrom, dateTo) {
    console.log('in serviceeeeeeeee');
    console.log(searchText, dateFrom, dateTo);
    const params = new HttpParams().
      set('searchText', searchText)
      .set('dateFrom', dateFrom)
      .set('dateTo', dateTo);
    return this.http
      .get(this.baseUrl + '/doctorhomepage', { headers: this.headers, params })
    // .pipe(
    //   catchError(this.handleError)
    // );
  }


}
