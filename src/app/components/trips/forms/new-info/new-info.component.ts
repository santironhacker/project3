import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { TripService } from '../../../../services/trip.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-new-info',
  templateUrl: './new-info.component.html',
  styleUrls: ['./new-info.component.scss']
})
export class NewInfoComponent implements OnChanges {
  @Output() createdOne = new EventEmitter<any>();

  feedbackEnabled = false;
  feedbackEnabledMembers = false;
  error = null;
  processing = false;
  name: String;
  description: String;
  
  tripObject: any;
  user: any;
  member: String;
  members: Array<any> = [];

  // Autocomplete properties
  myControl : FormControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
   ];

  filteredUsers: Observable<string[]>;

  @Input() users: any;
  @Input() errorStateMatcher: any;
  
  constructor(
    private tripService: TripService,
    private router: Router) {
  }
  
  ngOnChanges() {
    if (!this.users) {
      throw new Error('Cannot init TripCreatePageComponent without @input users. Add an ngIf to make sure users is defined');
    }
    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }

  // Handle create trip button
  createOne(form){
    this.tripObject = {
      name: this.name,
      description: this.description,
      members: this.members
    }
    this.createdOne.emit(this.tripObject);
  }

  // Autocomplete-filter pipe settings
  filter(val: string): string[] {
    return this.users.filter(user => user.username.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  // DOM Manipulation: Add member to the trip 
  setInput(){
    let member = <HTMLInputElement>document.getElementById('add-member');

    this.users.forEach(element => {
      if (element.username === member.value ) {
        let addedMember = document.createElement("div");
        let addedMembersList = document.getElementById('added-members') as HTMLElement;
        addedMember.innerText = member.value;
        addedMembersList.appendChild(addedMember);
        this.members.push(element._id);
        this.feedbackEnabledMembers = false;
      } else {
        this.feedbackEnabledMembers = true;
      }
    });
  }

  handleSubmitForm(form){}


}