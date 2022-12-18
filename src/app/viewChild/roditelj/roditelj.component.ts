import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-roditelj',
  templateUrl: './roditelj.component.html',
  styleUrls: ['./roditelj.component.css']
})
export class RoditeljComponent {

 public  parentIme?:string;
   displayCounter(count: any){
    this.parentIme = count;
  }

}
