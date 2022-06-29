import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgCoreModule } from 'ngx-videogular';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VgCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
