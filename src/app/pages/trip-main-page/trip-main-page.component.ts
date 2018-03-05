import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-main-page',
  templateUrl: './trip-main-page.component.html',
  styleUrls: ['./trip-main-page.component.scss']
})
export class TripMainPageComponent implements OnInit {

  trip: any;
  tripId: String;
  place: any;

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.tripService.getOne(this.id)
    //   .then((trip) => {
    //   this.trip = trip;
      this.route.params
      .subscribe((params) => {
        this.tripId = params['id'];
        console.log(this.tripId);
        this.tripService.getTripUser(this.tripId)
        .then(res => this.trip = res);
        console.log(this.trip);
      })
  }
    
  handleAdd(place){
    console.log(place);
    this.route.params
        .subscribe((params) => {
          this.tripId = params['id'];
          console.log(this.tripId);
          this.tripService.addPlace(this.tripId, place)
          .then(res => this.trip = res);
        })
      }
}
