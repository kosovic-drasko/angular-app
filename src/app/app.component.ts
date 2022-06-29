import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  [x: string]: any;
  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef;
  isPlay: boolean = false;
  toggleVideo() {
    this['videoplayer'].nativeElement.play();
  }
  title = 'angular-app';
}
