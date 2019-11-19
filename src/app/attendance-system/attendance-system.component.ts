import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-system',
  templateUrl: './attendance-system.component.html',
  styleUrls: ['./attendance-system.component.css'],
  animations: [routerTransition()]
})
export class AttendanceSystemComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
