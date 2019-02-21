import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from './models/loginRequest';
import { environment } from '../../environments/environment';
import { LoginResponse } from './models/login.response';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  public login(request: LoginRequest): Promise<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiURL}/users/login`, request).toPromise();
  }
}
