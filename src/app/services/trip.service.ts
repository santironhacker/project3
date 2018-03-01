import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TripService {

  API_URL = 'http://localhost:3000/trips';

  constructor(private httpClient: HttpClient) { }

  getOne(id): Promise<any> {
    return this.httpClient.get(`${this.API_URL}/${id}`)
    .toPromise()
  }

  createTrip(data: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/`, data, options)
    .toPromise()
  }

}
