import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'nidhal', 'jelassi', 38, 'Formateur'),
    new Candidat(2, 'homer', 'simpson', 18, 'Plombier', 'homer.jpg'),
    new Candidat(3, 'bart', 'simpson', 58, 'Ingénieur', 'bart.jpeg'),
  ];

  constructor() {}

  getAllCandidats() {
    return this.tabCandidats;
  }

  getCandidatById(id) {
    return this.tabCandidats.find((c) => c.id == id);
  }

  addCandidat() {
    this.tabCandidats.push(new Candidat(1, 'NEW', 'CANDIDAT', 38, 'Formateur'));
  }
}
