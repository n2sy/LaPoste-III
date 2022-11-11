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
        this.candSer.getCandidatByIdAPI(p.get('myid')).subscribe({
          next: (response) => {
            this.cand = response;
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onUpdate() {
    this.candSer.updateCandidatAPI(this.cand).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
