import { Component ,OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  users!: User[] ;
  allusers!: User[];

  constructor(public userService: UserService) {}
  handleSearchResults(users: User[]) {
    this.userService.showSearchResults =false;
    this.users = users;
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.allusers = data;
      console.log(this.allusers); 
  });
  }
}
