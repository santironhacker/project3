import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss']
})
export class AboutInfoComponent implements OnInit {

  @Input() trip: any;

  constructor() { }

  ngOnInit() {
  }

}
