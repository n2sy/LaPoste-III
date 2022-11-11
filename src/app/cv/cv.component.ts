import { Component, OnInit } from '@angular/core';
import { ListCandidatsService } from '../list-candidats.service';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listeCandidats: any = [];
  selectedCand: Candidat;
  constructor(
    private candSer: ListCandidatsService,
    private first: FirstService
  ) {}

  ngOnInit(): void {
    // this.listeCandidats = this.candSer.getAllCandidats();
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (response) => {
        this.listeCandidats = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.first.showInfos();
  }

  addNewCand() {
    // this.candSer.addCandidat();
  }

  logCands() {
    console.log(this.candSer.getAllCandidats());
  }

  sendDetails(cand) {
    this.selectedCand = cand;
  }
}
