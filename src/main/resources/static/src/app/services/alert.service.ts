import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AlertService {
    private subject = new Subject<any>();
    success(message: string) {
        this.subject.next( message);
    }

    error(message: string) {
        this.subject.next( message );
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
