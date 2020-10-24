import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';
import { HomepageFooterComponent } from './homepage-footer/homepage-footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDropdownForm } from './dropdown-form/dropdown-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    HomepageNavbarComponent,
    HomepageFooterComponent

    NgbdDropdownForm,
    SignupPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
