// Routers and modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Services
import { AuthService } from './services/auth.service';

// -- guards
import { RequireAnonGuardService } from './services/guards/require-anon-guard.service';
import { RequireUserGuardService } from './services/guards/require-user-guard.service';
import { InitAuthGuardService } from './services/guards/init-auth-guard.service';

// Pages
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

// Components
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TripPageComponent } from './pages/trip-page/trip-page.component';


// -- routes
const routes: Routes = [
  { path: '',  component: LandingPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: LoginComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignUpComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'users',  component: UserPageComponent , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    UserPageComponent,
    TripPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthService, InitAuthGuardService, RequireAnonGuardService, RequireUserGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
