import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', 'big-card.component-responsive.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  cardImgCover:string = "";
  @Input()
  cardAuthor:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  cardDescription = "";

  @Input()
  Id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
