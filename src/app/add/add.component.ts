import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCandidatsService } from '../list-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private candSer: ListCandidatsService, private router: Router) {}

  ngOnInit(): void {}

  onAdd(newCand) {
    this.candSer.addCandidatAPI(newCand).subscribe({
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
