import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit {

  // @Input() trip: any;


  constructor(
    private tripService: TripService,
    private router: Router) { }

  ngOnInit() {
  }

  handleCreate(trip){
    console.log(trip);
    this.tripService.createTrip(trip)
    .then((result) => {
      this.router.navigate(['/users']);
    })
    // .catch((err) => {
    //   this.error = err.error.error;
    // });

  }


  
}
