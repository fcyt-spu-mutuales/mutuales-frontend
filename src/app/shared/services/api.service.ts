import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../login/models/login.request';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '../../login/models/login.response';
import { UserListRequest } from '../../layout/users/models/user.list.request';
import { UserListResponse } from 'src/app/layout/users/models/user.list.response';
import { EntityForMap } from 'src/app/layout/entities/models/entity.map.response';
import { EntityListRequest } from 'src/app/layout/entities/models/entity.list.request';
import { EntityListResponse } from 'src/app/layout/entities/models/entity.list.response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  /**
   * USERS
   */

  public login(request: LoginRequest): Promise<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiURL}/users/login`, request).toPromise();
  }

  public getUsers(request: UserListRequest): Promise<UserListResponse> {
    return this.httpClient.post<UserListResponse>(`${this.apiURL}/users`, request).toPromise();
  }

  public removeUser(id: number): Promise<any> {
    return this.httpClient.delete(`${this.apiURL}/users/` + id).toPromise();
  }

  public getAllEntitiesForMap(): Promise<EntityForMap> {
    return this.httpClient.get<EntityForMap>(`${this.apiURL}/cooperatives/map`).toPromise();
  }

  public getAllEntities(request: EntityListRequest): Promise<EntityListResponse> {
    return this.httpClient.post<EntityListResponse>(`${this.apiURL}/cooperatives`, request).toPromise();
  }
}
