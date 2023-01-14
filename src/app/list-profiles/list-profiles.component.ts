import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}