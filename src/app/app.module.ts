import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';
import { HomepageFooterComponent } from './homepage-footer/homepage-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageNavbarComponent,
    HomepageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
