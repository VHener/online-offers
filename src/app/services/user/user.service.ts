import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  createNewUser(payload: any) {
    return this.http.post(`${environment.baseURL}auth/register`, payload);
  }

  userLogin(payload: any) {
    console.log('aaaa');
    console.log(`${environment.baseURL}auth/login`);
    console.log(payload);

    return this.http.post(`${environment.baseURL}auth/login`, payload);
  }

  getProtectedData() {
    return this.http.get(`${environment.baseURL}user/data`);
  }
  constructor(private http: HttpClient) {}
}
