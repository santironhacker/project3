import { Component, OnInit, Input, NgZone } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-about-places-map',
  templateUrl: './about-places-map.component.html',
  styleUrls: ['./about-places-map.component.scss']
})
export class AboutPlacesMapComponent implements OnInit {
  @Input() places: any;
  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 42.8282;
    this.longitude = 11.5795;
  }

}
