import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'Malek';
  color = 'pink';
  hd = false;
  constructor() {}

  ngOnInit(): void {}

  traitement() {
    alert('Click détecté !');
  }

  traitementDuParent(msg) {
    alert(msg);
    this.name = msg;
  }
}
