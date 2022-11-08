import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  listeCandidats: Candidat[] = [
    new Candidat(1, 'nidhal', 'jelassi', 38, 'Formateur', 'nidhal.jpg'),
    new Candidat(2, 'homer', 'simpson', 18, 'Plombier', 'homer.jpg'),
    new Candidat(3, 'bart', 'simpson', 58, 'Ingénieur', 'bart.jpeg'),
  ];
  selectedCand: Candidat;
  constructor() {}

  ngOnInit(): void {}

  sendDetails(cand) {
    this.selectedCand = cand;
  }
}
