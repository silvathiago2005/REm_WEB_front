import { Injectable } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
  })

export class ResetSenhaService{
    constructor(private authService: AuthService) { }
    logged: boolean = false;

    resetSenha(username: string, password: string, newPassword: string){
        this.authService.resetSenha(username, password, newPassword).subscribe(x => this.logged = x);
        
        return this.logged;
    }
}