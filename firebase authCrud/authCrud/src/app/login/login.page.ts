import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router:Router, public auth: AuthService) { }

  ngOnInit() {
  }

  register(form) {
    console.log(form.value);
    this.auth.doLogin(form.value).then((e) => {
      console.log(e);
      this.router.navigate(['home']);
    }).catch((e) => {
      console.log(e);
    });

  }
  go() {
    this.router.navigate(['signup']);
  }

}
