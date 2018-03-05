import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  feedbackEnabled = false;
  error = null;
  processing = false;
  // post: any;

  constructor(
    private authService: AuthService, 
    private router: Router) {}
    // private fb: FormBuilder ) { }

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