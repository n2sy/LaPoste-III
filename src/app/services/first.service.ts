import { Injectable } from '@angular/core';
import { ListCandidatsService } from '../list-candidats.service';

export class FirstService {
  constructor() {}

  showInfos() {
    console.log('Je suis le First Service');
    //console.log(this.candSer.getAllCandidats());
  }
}
