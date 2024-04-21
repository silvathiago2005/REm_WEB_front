import { Component } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-Component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

export class LoginComponent {
    constructor(private fb: FormBuilder, private _router: Router, private loginService: LoginService) { }

    test_userName:string = 'silvathiago2005';
    test_password:string = "Oficin@g3";
    test_name: string = "Thiago Lopes da Silva";
    test_profile: string = "Desenvolvedor";

    errorPassword: boolean = false;
    errorUsername: boolean = false;

    loginProfile = this.fb.group({
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
    })

    get username() { return this.loginProfile.get("username"); }
    get password() { return this.loginProfile.get("password"); }

    validUsername(){ this.errorUsername = this.loginProfile.get("username")?.value === this.test_userName }
    validPassword(){ this.errorPassword = this.loginProfile.get("password")?.value === this.test_password }

    onSubmit() {
        if(this.loginService.login(this.loginProfile.get("username")?.value, this.loginProfile.get("password")?.value)){
            this._router.navigate(['Home/Dashboard']);
        }else{
            this._router.navigate(['Home/Dashboard']);
        }    
    }

    changePassword(){
        this._router.navigate(["ResetPassword"]);
    }
}