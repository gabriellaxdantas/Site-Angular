import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  contentImgCover:string = "";
  @Input()
  contentAuthor:string = "";
  @Input()
  contentTitle:string = "";
  @Input()
  contentSubtitle:string="";
  @Input()
  contentDescription = "";
  constructor() { }

  ngOnInit(): void {
  }

}
