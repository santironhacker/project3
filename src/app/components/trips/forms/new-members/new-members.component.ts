import { Component, OnInit, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-new-members',
  templateUrl: './new-members.component.html',
  styleUrls: ['./new-members.component.scss']
})
export class NewMembersComponent implements OnInit {

  myControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
   ];

  @Input() users: any;
  @Input() errorStateMatcher: any;

  constructor() { }

  ngOnInit() {
  }

}
