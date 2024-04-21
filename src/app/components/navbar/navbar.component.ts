import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    console.log('Passou por aqui')
  }

  directHome(){
    this._router.navigate(['Home/Dashboard']);
  }

  directLocadores(){
    this._router.navigate(['Home/Locadores']);
  }

  directLogin(){
    console.log("Click na opção deu certo, mané! Direcionando para o Login")
  }

  directResetPassword(){
    this._router.navigate(['ResetPassword']);
  }

}
