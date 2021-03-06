import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VgCoreModule } from 'ngx-videogular';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';




import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VgCoreModule, NgxYoutubePlayerModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
