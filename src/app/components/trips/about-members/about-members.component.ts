import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-members',
  templateUrl: './about-members.component.html',
  styleUrls: ['./about-members.component.scss']
})
export class AboutMembersComponent implements OnInit {

  @Input() trip: any;
  @Input() users: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}

