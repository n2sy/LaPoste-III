import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent implements OnInit {
  FontList = ['', 'Phosphate', 'Garamond', 'Arial'];
  bgColor;
  txtColor;
  txtSize;
  txtFont;
  constructor() {}

  ngOnInit(): void {}

  changeSize(inp) {
    console.log(inp);
    this.txtSize = inp + 'px';
  }
}
