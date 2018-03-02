import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TripService } from '../../../../services/trip.service';
import { Router } from '@angular/router';
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
  @Output() trip = new EventEmitter<any>(this.tripObject);
  
  constructor(private tripService: TripService, private router: Router) {
  }
  
  ngOnInit() {
  }
  
  handleSubmitForm(form){
    this.tripObject = {
      name: this.name,
      description: this.description,
      members: this.members
    }
    console.log(this.tripObject);
    this.trip.emit(this.tripObject);
  }

  setInput(user){
    let added = document.createElement("p");
    let div = document.getElementById('addedmembers') as HTMLElement;
    added.innerText = user.username;
    div.appendChild(added);
    this.members.push(user._id);
  }
  // submitForm(form) {
  //   this.error = '';
  //   this.feedbackEnabled = true;
  //   if (form.valid) {
  //     this.processing = true;
  //     this.tripService.createTrip({
  //         name: this.trip.name,
  //         description: this.trip.description
  //     })
  //       .then((result) => {
  //         this.router.navigate(['/trip/'${id});
  //       })
  //       .catch((err) => {
  //         this.error = err.error.error;
  //         this.processing = false;
  //         this.feedbackEnabled = false;
  //       });
  //   }
  // }

  // when you submit you pas {name, description}
}
