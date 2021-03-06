import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
    this.route.params
    .subscribe((params) => {
      this.tripId = params['id'];
      
      this.tripService.getOne(this.tripId)
       .then((trip) => {
       this.trip = trip;
       })

      this.tripService.getTripUser(this.tripId)
       .then(res => this.trip = res);
      })

      
  }
    
  handleAdd(place){
    this.route.params
        .subscribe((params) => {
          this.tripId = params['id'];
          this.tripService.addPlace(this.tripId, place)
          .then((res) => {
            this.trip = res;
            this.router.initialNavigation();
            window.location.reload(true);
          });
        })
          // @todo reload the page???
          // @todo maybe another solution for reload the page
      }
      // @ go back button
}