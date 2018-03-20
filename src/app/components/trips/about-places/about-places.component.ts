import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-places',
  templateUrl: './about-places.component.html',
  styleUrls: ['./about-places.component.scss']
})
export class AboutPlacesComponent implements OnInit {
  
  @Input() places: any;

  constructor() { }

  ngOnInit() {
  }

}
