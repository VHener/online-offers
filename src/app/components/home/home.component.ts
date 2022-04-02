import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private user: UserService) {}

  getProtectedData() {
    this.user.getProtectedData().subscribe({
      next: (data: any) => {
        console.log(data);
      },
    });
  }

  ngOnInit() {
    this.getProtectedData();
  }
}
