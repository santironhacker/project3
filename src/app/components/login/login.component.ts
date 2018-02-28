import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      this.authService.login({
          username: this.username,
          password: this.password
      })
        .then((result) => {
          this.router.navigate(['/users']);
        })
        .catch((err) => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}