import { ElementRef, NgZone, OnInit, ViewChild, Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})


export class AddPlaceComponent implements OnInit {
  
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  lat: number;
  lng: number;
  name: String;
  description: String;
  place: any;
  
  @Output() newPlace = new EventEmitter(this.place);

  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) {}

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode", "establishment"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log(place.photos[0], place.name);
          console.log(place.geometry.location.lat());
          this.lat = place.geometry.location.lat();
          this.name = place.name;
          this.lng = place.geometry.location.lng();

          console.log(this.lat);

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
  

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  addPlace(event){
      // const placeSchema = new Schema({
  //   name: String,
  //   description: String,
  //   location: {
  //     type: {
  //       type: String,
  //       default: 'Point'
  //     },
  //     coordinates: [Number]
  //   }
  // });
    let place = {
      name: this.name,
      description: this.description,
      coordinates: [this.lat, this.lng]
    }
    console.log(place);
    this.place.emit('place');
  }

  // onClick() {
  //   this.notify.emit('Click from nested component');
  // }
}