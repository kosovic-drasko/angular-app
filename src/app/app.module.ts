import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgCoreModule } from 'ngx-videogular';




import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { RoditeljComponent } from './viewChild/roditelj/roditelj.component';
import {DeteComponent} from "./viewChild/dete/dete.component";

@NgModule({
  declarations: [AppComponent, DeteComponent, RoditeljComponent, DeteComponent],
  imports: [BrowserModule, VgCoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
