import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

}
