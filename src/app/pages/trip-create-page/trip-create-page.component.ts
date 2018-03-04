import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-trip-create-page',
  templateUrl: './trip-create-page.component.html',
  styleUrls: ['./trip-create-page.component.scss']
})
export class TripCreatePageComponent implements OnInit {
  @Input() place: any;
  users: Array<any>;

  
  constructor(
    private tripService: TripService,
    private userService: UserService,
    private router: Router) { }
    
    ngOnInit() {
      this.userService.getUsers()
      .then((users) => {
        this.users = users;
        console.log(this.place);
    }) 
  }

  handleCreate(trip){
    console.log(trip);
    this.tripService.createTrip(trip)
    .then((result) => {
        this.router.navigate(['/users']);
    })
    // .catch((err) => {
    //   this.error = err.error.error;
    // });
  
  

  }

}
