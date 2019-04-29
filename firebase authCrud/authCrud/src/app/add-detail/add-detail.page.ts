import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.page.html',
  styleUrls: ['./add-detail.page.scss'],
})
export class AddDetailPage implements OnInit {

  constructor(public fire:FirebaseService, public router:Router) { }

  ngOnInit() {
  }

  add(res) {
    console.log(res.value);
    this.fire.createTask(res.value).then(e => console.log(e)).catch(e => console.log(e));
    this.router.navigate(['home']);
  }

}
