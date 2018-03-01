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
import { UserService } from './services/user.service';

// -- guards
import { RequireAnonGuardService } from './services/guards/require-anon-guard.service';
import { RequireUserGuardService } from './services/guards/require-user-guard.service';
import { InitAuthGuardService } from './services/guards/init-auth-guard.service';

// -- pages
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TripMainPageComponent } from './pages/trip-main-page/trip-main-page.component';
import { TripCreatePageComponent } from './pages/trip-create-page/trip-create-page.component';

// -- components
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AboutInfoComponent } from './components/trips/main/about-info/about-info.component';
import { NewInfoComponent } from './components/trips/forms/new-info/new-info.component';
import { NewMembersComponent } from './components/trips/forms/new-members/new-members.component';
import { AddPlaceComponent } from './components/trips/forms/add-place/add-place.component';


// -- routes
const routes: Routes = [
  { path: '',  component: LandingPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'login',  component: LoginComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'signup',  component: SignUpComponent, canActivate: [ RequireAnonGuardService ] },
  { path: 'users',  component: UserPageComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'trips/create',  component: TripCreatePageComponent , canActivate: [ RequireUserGuardService ] },
  { path: 'trips/:id',  component: TripMainPageComponent , canActivate: [ RequireUserGuardService ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    UserPageComponent,
    TripCreatePageComponent,
    NewInfoComponent,
    NewMembersComponent,
    AddPlaceComponent,
    TripMainPageComponent,
    AboutInfoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthService, InitAuthGuardService, RequireAnonGuardService, RequireUserGuardService, TripService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
