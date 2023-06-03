import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  erreur=false
  username:any
  password:any

  constructor() {
  }
  login(){
this.erreur=!this.erreur

  }

}
