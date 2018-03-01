import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  API_URL = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/`, options)
    .toPromise()
  }
}
