import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-trips',
  templateUrl: './card-trips.component.html',
  styleUrls: ['./card-trips.component.scss']
})
export class CardTripsComponent implements OnInit {

  @Input() trip: Object;
  constructor() { }

  ngOnInit() {
  }

}
