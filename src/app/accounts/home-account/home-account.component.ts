import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css'],
})
export class HomeAccountComponent implements OnInit {
  tabAccounts = [
    {
      name: 'Nidhal Account',
      statut: 'active',
    },
    {
      name: 'Yassine Account',
      statut: 'inactive',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  traiter(newAccount) {
    this.tabAccounts.push(newAccount);
  }
}
