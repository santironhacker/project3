import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-trips',
  templateUrl: './about-trips.component.html',
  styleUrls: ['./about-trips.component.scss']
})
export class AboutTripsComponent implements OnInit {

  @Input() trips: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
