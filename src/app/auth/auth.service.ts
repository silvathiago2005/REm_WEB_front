import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }

  isLoggedIn = false;
  _username:string = "";
  _password: string = "";

  redirectUrl: string | null = null;
  
  setUsername(username: string){
    this._username = username;
  }

  setPassword(password: string){
    this._password = password;
  }

  login(username: string, password: string): Observable<boolean>{
    this.isLoggedIn = false;
    if(username === "silvathiago2005" && password === "Oficin@g3") this.isLoggedIn = true;

    return of(this.isLoggedIn);
  }

  resetSenha(username: string, password: string, newPassword: string){
    this.isLoggedIn = false;

    //TODO: fazer a lógica de troca de senha, após a troca fazer envio dos dados para o método de login para validar o cliente e entrar na tela inicial.

    this.login(username, password).subscribe(r => this.isLoggedIn = r);

    return of(this.isLoggedIn);
  }

  isLoggedin(): Observable<boolean>{
    return of(this.isLoggedIn);
  }

  logout(): void{
    this.isLoggedIn = false;
    this._router.navigate(['Login']);
  }
}
