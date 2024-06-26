import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.isLoggedin().subscribe(x => this.isLoggedIn = x);
  }

}
