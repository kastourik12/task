import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayShowsComponent } from './components/display-shows/display-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayShowsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
