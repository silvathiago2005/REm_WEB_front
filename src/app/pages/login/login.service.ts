import { Injectable } from '@angular/core';
import { AuthService } from './../../auth/auth.service';

@Injectable({
    providedIn: 'root'
  })

export class LoginService{
    constructor(private authService: AuthService) { }
    logged: boolean = false;

    login(username: string, password: string){
        this.authService.login(username, password).subscribe(x => this.logged = x);
        return this.logged;
    }
}