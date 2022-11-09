import { Component, Input, OnInit } from '@angular/core';
import { ListRecruesService } from '../list-recrues.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() selectedCand: Candidat;
  constructor(private recrueSer: ListRecruesService) {}

  ngOnInit(): void {}

  recruterCand() {
    this.recrueSer.addRecrue(this.selectedCand);
  }
}
