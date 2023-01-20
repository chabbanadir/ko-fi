import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.Service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: '',
    name: '',
    about: '',
    imgprofil: '',
    imgcover: '',
    category: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  register() {
    this.authService
      .register({
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        id: 0,
        about: this.user.about,
        imgprofil: this.user.imgprofil,
        imgcover: this.user.imgcover,
        token: '',
        category: this.user.category,
      })
      .subscribe((user) => {
        this.router.navigate(['/']);
      });
  }
}
