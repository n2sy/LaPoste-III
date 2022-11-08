import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent implements OnInit {
  name;
  statut;
  @Output() msgToHome = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addAccount() {
    this.msgToHome.emit({
      name: this.name,
      statut: this.statut,
    });
  }
}
