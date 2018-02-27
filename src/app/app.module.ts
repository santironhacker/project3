// Routers and modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Services

// Pages
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

// Components
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent }
  // { path: 'restaurants/:id', component: RestaurantDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    LayoutPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
