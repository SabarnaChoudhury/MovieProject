import { NgbdDropdownForm } from './dropdown-form/dropdown-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';
import { HomepageFooterComponent } from './homepage-footer/homepage-footer.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupPageComponent } from './signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavOptionsComponent } from './nav-options/nav-options.component';


@NgModule({
  declarations: [
    AppComponent,

    HomepageNavbarComponent,
    HomepageFooterComponent,

    NgbdDropdownForm,
    SignupPageComponent,
    NewReleasesComponent,
    NavOptionsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
