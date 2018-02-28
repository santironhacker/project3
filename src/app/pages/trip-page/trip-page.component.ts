import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit {

  // @Input() trip: any;


  constructor(private tripService: TripService) { }

  ngOnInit() {
  }

  handleCreate(paquito){
    console.log("fdlajflkdrfs" + paquito.name)
  }


  
}
