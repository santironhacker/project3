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

  constructor(
    private authService: AuthService,
    private tripService: TripService) { }

  ngOnInit() {
    console.log(this.authService.user);
    this.tripService.getUserTrips(this.authService.user._id)
    .then((trips) => {
      this.trips = trips;
      console.log(trips);
      console.log(trips[0].name);
      console.log(trips[1].name);
    })
  }

}
