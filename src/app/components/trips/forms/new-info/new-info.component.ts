import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TripService } from '../../../../services/trip.service';
import { Router } from '@angular/router';
// import { create } from 'domain';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-new-info',
  templateUrl: './new-info.component.html',
  styleUrls: ['./new-info.component.scss']
})
export class NewInfoComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  name: String;
  description: String;
  // members: Array<any>;
  tripObject: any;
  user: any;
  member: String;
  members: Array<any> = [];

  @Input() users: any;
  @Output() createTrip = new EventEmitter<any>();
  
  constructor(
    private tripService: TripService,
    private router: Router) {
  }
  
  ngOnInit() {
  }
  
  handleSubmitForm(form){
    this.tripObject = {
      name: this.name,
      description: this.description,
      members: this.members
    }
    this.createTrip.emit(this.tripObject);
  }

  setInput(user){
    let added = document.createElement("p");
    let div = document.getElementById('addedmembers') as HTMLElement;
    added.innerText = user.username;
    div.appendChild(added);
    this.members.push(user._id);
  }
}