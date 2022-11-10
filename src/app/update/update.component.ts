import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  cand;
  constructor(
    private activRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        //this.id = p.get('myid');
        console.log(p.get('myid'));
        this.cand = this.candSer.getCandidatById(p.get('myid'));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onUpdate() {
    this.candSer.updateCandidat(this.cand);
    this.router.navigateByUrl('/cv');
  }
}
