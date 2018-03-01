import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-main-page',
  templateUrl: './trip-main-page.component.html',
  styleUrls: ['./trip-main-page.component.scss']
})
export class TripMainPageComponent implements OnInit {

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getOne(id)
    .then((trip) => {
      this.
    })

  }


}
