import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  id;
  constructor(private activRoute: ActivatedRoute) {}

  ngOnInit(): void {
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
    this.activRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.id = p.get('myid');
        console.log(p.get('myid'));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
