import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.Service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: '',
    name:''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  register() {
    this.authService.register({
      email: this.user.email, password: this.user.password, name: this.user.name,
      id: 0,
      is_creator: false,
      token: ''
    }).subscribe(user => {
      this.router.navigate(['/']);
    });
  }

}