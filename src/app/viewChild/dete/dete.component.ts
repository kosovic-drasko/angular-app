import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dete',
  templateUrl: './dete.component.html',
  styleUrls: ['./dete.component.css']
})
export class DeteComponent {

  public ime?: string = 'ana';
  @Output() valueIme = new EventEmitter();
  dodajImeRoditeljskojKkomponenti() {
  this.valueIme.emit(this.ime);
  }
}
