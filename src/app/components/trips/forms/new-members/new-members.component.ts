import { Component, OnInit, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-new-members',
  templateUrl: './new-members.component.html',
  styleUrls: ['./new-members.component.scss']
})
export class NewMembersComponent implements OnInit {

  myControl : FormControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
   ];

  filteredUsers: Observable<string[]>;


  @Input() users: any;
  @Input() errorStateMatcher: any;

  constructor() { }

  ngOnInit() {
    console.log(this.users);
    // this.filteredUsers = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(val => this.filter(val))
    // );
  }

  // filter(val: string): string[] {
  //   return this.users.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
