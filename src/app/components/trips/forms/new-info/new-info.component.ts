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
  trip: {
    name: String,
    description: String,
  }

  // name
  // description
  //in the template name description
  @Output() trip2 = new EventEmitter<any>();

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmitForm(){
    console.log( this.trip.name, this.trip.description)
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
