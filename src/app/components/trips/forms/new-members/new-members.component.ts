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
  members: Array<any> = [];

  @Input() users: any;
  @Input() errorStateMatcher: any;

  constructor() { }

  ngOnInit() {
    const doThis = () => {
      console.log(this.users, 'ok')
      
      this.filteredUsers = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    
    }
    var timeoutID = window.setTimeout( doThis, 1);
    
  }

  filter(val: string): string[] {
    return this.users.filter(user => user.username.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  setInput(){
    let member = <HTMLInputElement>document.getElementById('add-member');
    console.log(member.value);
    let addedMember = document.createElement("div");
    let addedMembersList = document.getElementById('added-members') as HTMLElement;
    addedMember.innerText = member.value;
    addedMembersList.appendChild(addedMember);
    // this.members.push(user._id);
  }

  
}
