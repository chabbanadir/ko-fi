import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.services';
@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit  {
  users!: User[] ;

  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
  });
  }
  
  
   
  
}
