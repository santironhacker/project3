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

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params
    .subscribe((params) => {
      this.tripId = params['id'];
      console.log(this.tripId);
      
      this.tripService.getOne(this.tripId)
       .then((trip) => {
       this.trip = trip;
       console.log(this.trip)
       })

      this.tripService.getTripUser(this.tripId)
       .then(res => this.trip = res);
      })

    }
    
  handleAdd(event){
    console.log(event)
  }

}
