import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  apiUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getRequestList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/request/list');
  }
}
