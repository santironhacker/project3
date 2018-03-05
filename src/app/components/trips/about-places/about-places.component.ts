import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-places',
  templateUrl: './about-places.component.html',
  styleUrls: ['./about-places.component.scss']
})
export class AboutPlacesComponent implements OnInit {
  
  @Input() trip: any;

  constructor() { }

  ngOnInit() {
    console.log(this.trip);
    console.log(this.trip.places.length)
    console.log(this.trip.places[0].name)
  }

}
