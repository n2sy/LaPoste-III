import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrls: ['./info-server.component.css'],
})
export class InfoServerComponent implements OnInit {
  oneServer;
  btnDisabled = false;
  constructor(
    private actRoute: ActivatedRoute,
    private lstServers: ListServerService
  ) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.oneServer = this.lstServers.getServerById(p.get('id'));
      },
    });

    this.actRoute.queryParamMap.subscribe({
      next: (q: ParamMap) => {
        this.btnDisabled = q.get('allowEdit') == '1' ? false : true;
      },
    });
  }
}
