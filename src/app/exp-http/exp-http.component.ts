import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-http',
  templateUrl: './exp-http.component.html',
  styleUrls: ['./exp-http.component.css'],
})
export class ExpHttpComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Flux terminé');
      },
    });
  }
}
