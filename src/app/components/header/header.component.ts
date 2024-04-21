import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  title = 'Chassi_Project';
  customerName:string = "Teste S.A";

  ngOnInit(): void {
  }

  Logout(){
    this._authService.logout();
    console.log('Passou por aqui, HeaderComponent, Logout')
  }

}
