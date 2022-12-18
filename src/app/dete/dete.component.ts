import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dete',
  templateUrl: './dete.component.html',
  styleUrls: ['./dete.component.css']
})
export class DeteComponent implements OnInit {

  imeDete?:string;
  @Input()
  imeData?:string;

  constructor() {
   this.imeDete=this.imeData;
  }

  ngOnInit(): void {
  }

}
