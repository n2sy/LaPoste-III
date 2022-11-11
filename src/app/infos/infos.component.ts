import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  // id;
  cand;
  constructor(
    private activRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    //V0
    // this.id = this.activRoute.snapshot.paramMap.get('myid');
    // V1
    // this.activRoute.params.subscribe({
    //   next: (p: Params) => {
    //     console.log(p['myid']);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
    // V2
    //this.activRoute.paramMap.subscribe(() => {});
    this.activRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        //this.id = p.get('myid');
        console.log(p.get('myid'));
        this.candSer.getCandidatByIdAPI(p.get('myid')).subscribe({
          next: (response) => {
            this.cand = response;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onDelete() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.cand._id).subscribe({
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
}
