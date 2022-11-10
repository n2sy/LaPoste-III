import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  serverEdit;
  constructor(
    private activatedRoute: ActivatedRoute,
    private servSevice: ListServerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.serverEdit = this.servSevice.getServerById(p.get('id'));
      },
    });
  }
}
