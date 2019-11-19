import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  loginDetails: any = {};
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('logged in');
  }
}
