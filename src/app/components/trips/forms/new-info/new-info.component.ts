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
  tripObject: any;

  @Output() trip2 = new EventEmitter<any>();

  constructor(private tripService: TripService, private router: Router) {
  }
  
  ngOnInit() {
  }
  
  handleSubmitForm(form){
    this.tripObject = {
      name2: this.name,
      description2: this.description
    }
    console.log( this.name, this.description, this.tripObject, this.tripObject.name2)
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
