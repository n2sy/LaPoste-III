import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() oneCandidat;
  @Output() msgToListe = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendCandToListe() {
    this.msgToListe.emit(this.oneCandidat);
  }
}
