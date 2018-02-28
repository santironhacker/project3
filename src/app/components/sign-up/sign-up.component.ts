import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { InitAuthGuardService } from '../../services/guards/init-auth-guard.service';
import { RequireAnonGuardService } from '../../services/guards/require-anon-guard.service';
import { RequireUserGuardService } from '../../services/guards/require-user-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;

  constructor(
    private authService: AuthService, 
    private router: Router ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.signup({
          username: this.username,
          password: this.password
      })
        .then((result) => {
          debugger;
          this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}