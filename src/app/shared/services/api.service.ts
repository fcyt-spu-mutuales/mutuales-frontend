import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../login/models/login.request';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '../../login/models/login.response';
import { UserListRequest } from '../../layout/users/models/user.list.request';
import { UserListResponse } from 'src/app/layout/users/models/user.list.response';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  /**
   * USERS
   */

  public login(request: LoginRequest): Promise<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiURL}/users/login`, request).toPromise();
  }

  public getUsers(request: UserListRequest): Promise<UserListResponse> {
    return this.httpClient.post<UserListResponse>(`${this.apiURL}/users`, request).toPromise();
  }
}
