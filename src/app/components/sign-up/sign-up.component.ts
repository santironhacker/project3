import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { InitAuthGuardService } from '../../services/guards/init-auth-guard.service';
import { RequireAnonGuardService } from '../../services/guards/require-anon-guard.service';
import { RequireUserGuardService } from '../../services/guards/require-user-guard.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  // ... model (e,g. username: String)
  username: String;
  password: String;

  constructor(
    private authService: AuthService, 
    private initAuthGuardService: InitAuthGuardService, 
    private requireAnonGuardService: RequireAnonGuardService,
    private requireUserGuardService: RequireUserGuardService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      // this.someService.method(... data ...)
      //   .then((result) => {
      //     // ... handle result, reset form, etc...
      //     // ... navigate with this.router.navigate(['...'])
      //     // ... maybe turn this to false if your're staying on the page - this.processing = false;
      //   })
      //   .catch((err) => {
      //     this.error = err.error.error; // :-)
      //     this.processing = false;
      //     this.feedbackEnabled = false;
      //   });
    }
  }

}