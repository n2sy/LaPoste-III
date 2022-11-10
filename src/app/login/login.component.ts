import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  listEntreprises = ['', 'LaPoste', 'Ooredoo', 'TT'];
  defaultEntreprise = 'Ooredoo';
  commentaire = 'RAS....';
  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(f);
  }

  generePwd(f: NgForm) {
    // f.setValue({
    //   exemple: '',
    //   login: '',
    //   pwd: '123456',
    //   entreprise: '',
    //   comment: '',
    // });
    f.form.patchValue({
      pwd: '123456',
    });
  }

  annulerForm(f: NgForm) {
    f.reset();
  }
}
