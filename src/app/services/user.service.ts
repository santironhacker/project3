import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  API_URL = environment.apiUrl + '/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/`, options)
    .toPromise()
  }
}
