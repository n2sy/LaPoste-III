import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent implements OnInit {
  inputStatut = '';
  tabServers = [
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(),
      statut: 'critical',
    },
    {
      name: 'Testing Development Server',
      type: 'large',
      date_d: new Date(),
      statut: 'stable',
    },
    {
      name: 'Development Server',
      type: 'large',
      date_d: new Date(),
      statut: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'small',
      date_d: new Date(),
      statut: 'offline',
    },
  ];
  constructor() {}

  addNewServer() {
    this.tabServers.push({
      name: 'NEW SERVER',
      type: 'small',
      date_d: new Date(),
      statut: 'stable',
    });
  }

  ngOnInit(): void {}

  affecterClass(st) {
    return {
      'list-group-item-danger': st == 'critical' ? true : false,
      'list-group-item-success': st == 'stable' ? true : false,
      'list-group-item-warning': st == 'offline' ? true : false,
    };
  }
}
