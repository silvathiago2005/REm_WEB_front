import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-reset-senha',
  templateUrl: './reset-senha.component.html',
  styleUrls: ['./reset-senha.component.css']
})
export class ResetSenhaComponent implements OnInit {

  constructor(private fb: FormBuilder, private _router: Router, private loginService: LoginService) { }

  errorResetSenha: boolean = false;

  resetSenhaProfile = this.fb.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      newPassword: new FormControl('',[Validators.required])
  })

  get username() { return this.resetSenhaProfile.get("username"); }
  get password() { return this.resetSenhaProfile.get("password"); }
  get newPassword() { return this.resetSenhaProfile.get("newPassword"); }

  validPassword(){ this.errorResetSenha = this.resetSenhaProfile.get("password")?.value != this.resetSenhaProfile.get("newPassword")?.value }

  onSubmit(): void {
    this.validPassword();

    if(this.loginService.login(this.resetSenhaProfile.get("username")?.value, this.resetSenhaProfile.get("password")?.value)){
      this._router.navigate(['Home/Dashboard']);
    }else{
      this._router.navigate(['Reset-Senha']);
    }   
  }

  ngOnInit(): void {}

  returnLogin(){
    this._router.navigate(["Login"]);
  }

}
