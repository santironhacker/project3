import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class TripService {
  
  API_URL = environment.apiUrl + '/trips';
  
  constructor(private httpClient: HttpClient) { }
  
  getOne(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}`, options)
    .toPromise()
  }

  createTrip(data: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/`, data, options)
    .toPromise()
  }

  // used for get places, get members and get the trip itself
  getUserTrips(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/member/${id}`, options)
    .toPromise()
  }

  // to get all members of a trip
  getTripUser(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}/members`, options)
    .toPromise()
  }

  //list place to a trip
  addPlace(id, data: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/${id}`, data, options)
    .toPromise()
  }
}
