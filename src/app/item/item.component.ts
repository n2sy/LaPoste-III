import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() oneCandidat: Candidat;
  @Output() msgToListe = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendCandToListe() {
    this.msgToListe.emit(this.oneCandidat);
  }
}
