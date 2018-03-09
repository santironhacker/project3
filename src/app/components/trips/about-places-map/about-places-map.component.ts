import { Component, OnInit, Input, NgZone, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader, AgmMap } from '@agm/core';
@Component({
  selector: 'app-about-places-map',
  templateUrl: './about-places-map.component.html',
  styleUrls: ['./about-places-map.component.scss']
})
export class AboutPlacesMapComponent implements OnInit {

  @ViewChild('map') public map: AgmMap;   // Fetching the child component through the "#map"

  @Input() places: any;
  public showMap: boolean;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  center: any;
  location: any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    // set center of map
    this.zoom = 4;
    this.latitude = 42.8282;
    this.longitude = 11.5795;
  }

  handleShowClick() {
    this.showMap = true;
  }

  handleCloseClick() {
    this.showMap = false;
  }
}
