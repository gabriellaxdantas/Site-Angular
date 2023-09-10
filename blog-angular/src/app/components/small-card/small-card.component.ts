import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', 'small-card.component-responsive.css']
})
export class SmallCardComponent implements OnInit {
  @Input ()
  cardImgCover:string = "";
  @Input ()
  cardTitle:string = "";

  @Input()
  Id:string="0";
  constructor() { }

  ngOnInit(): void {
  }

}
