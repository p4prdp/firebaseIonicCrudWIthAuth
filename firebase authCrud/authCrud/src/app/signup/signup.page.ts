import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public auth:AuthService, public router:Router) { }

  ngOnInit() {
  }
  register(form) {
    console.log(form.value);
    this.auth.doRegister(form.value).then(res => {
// tslint:disable-next-line: no-unused-expression
      this.router.navigate(['login']);
    }).catch(e => console.log(e));
  }

}
