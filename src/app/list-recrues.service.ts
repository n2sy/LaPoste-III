import { Injectable } from '@angular/core';
import { Candidat } from './models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  private tabRecrues = [];
  constructor() {}

  getAllRecrues() {
    return this.tabRecrues;
  }

  addRecrue(newRecrue: Candidat) {
    if (this.tabRecrues.indexOf(newRecrue) == -1)
      this.tabRecrues.push(newRecrue);
    else alert('Cette personne a déjà été recrutée !');
  }
}
