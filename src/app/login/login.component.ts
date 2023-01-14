import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.user.email, this.user.password).subscribe(user => {
      this.router.navigate(['/']);
    });
  }
}