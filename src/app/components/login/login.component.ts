import { Component, OnInit } from '@angular/core';
import { OuterNavbarComponent } from '../outer-navbar/outer-navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login(form) {
    console.log(form.value);
  }

  constructor() { }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
