import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [];
  constructor(public auth:AuthService, public router:Router, public fire:FirebaseService, public db:AngularFirestore) {
    this.items = console.log(this.fire.getTasks());
  }

  create() {
    this.router.navigate(['add-detail']);
  }

  logout() {
    this.auth.doLogout().then((e) => {
      console.log(e);
    }).catch((e) => console.log(e));
    this.router.navigate(['login']);
  }
}
