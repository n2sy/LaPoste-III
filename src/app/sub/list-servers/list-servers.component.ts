import { Component, OnInit } from '@angular/core';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css'],
})
export class ListServersComponent implements OnInit {
  AllServers = [];
  constructor(private lstServers: ListServerService) {}

  ngOnInit(): void {
    this.AllServers = this.lstServers.tabServers;
  }
}
