// Routers and modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// -- services
import { AuthService } from './services/auth.service';
import { TripService } from './services/trip.service';

// -- guards
import { RequireAnonGuardService } from './services/guards/require-anon-guard.service';
import { RequireUserGuardService } from './services/guards/require-user-guard.service';
import { InitAuthGuardService } from './services/guards/init-auth-guard.service';

// -- pages
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TripPageComponent } from './pages/trip-page/trip-page.component';

// -- components
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NewInfoComponent } from './components/trips/forms/new-info/new-info.component';
import { NewMembersComponent } from './components/trips/forms/new-members/new-members.component';
import { AddPlaceComponent } from './components/trips/forms/add-place/add-place.component';


// -- routes
const routes: Routes = [
  { path: '',  component: LandingPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: LoginComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignUpComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'users',  component: UserPageComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'trips',  component: TripPageComponent , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    UserPageComponent,
    TripPageComponent,
    NewInfoComponent,
    NewMembersComponent,
    AddPlaceComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthService, InitAuthGuardService, RequireAnonGuardService, RequireUserGuardService, TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
