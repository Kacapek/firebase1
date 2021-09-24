import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.css']
})
export class EmailComponentComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }



}
