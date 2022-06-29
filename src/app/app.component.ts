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
  id = 'lExdeVY1IBQ';
  playerVars = {
    cc_lang_pref: 'en',
  };
  player: any;
  savePlayer(player: any) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
