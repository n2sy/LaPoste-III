import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  tabCands: Candidat[] = [];
  @Output() msgToCv = new EventEmitter();
  constructor(private candSer: ListCandidatsService) {}

  ngOnInit(): void {
    this.tabCands = this.candSer.getAllCandidats();
  }

  logCands() {
    console.log(this.candSer.getAllCandidats());
  }

  sendToCv(cand) {
    this.msgToCv.emit(cand);
  }
}
