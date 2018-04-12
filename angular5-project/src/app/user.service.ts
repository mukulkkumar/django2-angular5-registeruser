import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any>{
    return this.http.post('http://localhost:8000/api/users/', userData);
  }
}
