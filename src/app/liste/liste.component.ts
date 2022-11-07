import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() tabCands: Candidat[] = [];
  @Output() msgToCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendToCv(cand) {
    this.msgToCv.emit(cand);
  }
}
