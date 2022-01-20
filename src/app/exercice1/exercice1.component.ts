import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public type : string = "text";
  
  constructor() { }

  ngOnInit(): void {
  }

  onChangeType() : void {
    if (this.type == "text") this.type = "number"
    else this.type = "text"
  }

}
