import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  trips: Array<any>;
  users: Array<any>;

  constructor(
    private authService: AuthService,
    private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getUserTrips(this.authService.user._id)
    .then((trips) => {
      this.trips = trips;
    })
  }

}
