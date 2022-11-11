import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    // new Candidat(1, 'nidhal', 'jelassi', 38, 'Formateur'),
    // new Candidat(2, 'homer', 'simpson', 18, 'Plombier', 'homer.jpg'),
    // new Candidat(3, 'bart', 'simpson', 58, 'Ingénieur', 'bart.jpeg'),
  ];
  link = 'http://localhost:3000/cv/persons';

  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.tabCandidats;
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }

  getCandidatById(id) {
    return this.tabCandidats.find((c) => c.id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(this.link + '/' + id);
  }

  // addCandidat() {
  //   this.tabCandidats.push(new Candidat(1, 'NEW', 'CANDIDAT', 38, 'Formateur'));
  // }

  deleteCandidat(cand) {
    let i = this.tabCandidats.indexOf(cand);
    this.tabCandidats.splice(i, 1);
  }

  deleteCandidatAPI(id) {
    // return this.http.delete(this.link + '/' + id);
    return this.http.delete(`${this.link}/${id}`); // template string
  }

  addCandidat(cand) {
    cand.id = this.tabCandidats[this.tabCandidats.length - 1].id + 1;
    this.tabCandidats.push(cand);
  }
  addCandidatAPI(cand) {
    return this.http.post(this.link, cand);
  }
  updateCandidat(cand) {
    let i = this.tabCandidats.indexOf(cand);
    this.tabCandidats[i] = cand;
  }
  updateCandidatAPI(cand) {
    return this.http.put(`${this.link}/${cand._id}`, cand);
  }
}
