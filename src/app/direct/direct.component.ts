import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent implements OnInit {
  bgColor = 'pink';
  couleur = 'blue';
  constructor() {}

  ngOnInit(): void {}

  changeStyle() {
    this.bgColor = 'black';
    this.couleur = 'red';
  }
}
