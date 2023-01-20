import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.services'; 
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  users!: User[];
  name!: string;
  @Output() searchResultsEvent = new EventEmitter<User[]>();



  constructor(private userService: UserService) {}
  
  searchUsers(name: string) {
    this.userService.getUsersByName(this.name).subscribe((users: User[]) => {
    this.users = users;
    this.searchResultsEvent.emit(this.users);
      if (name =''){this.userService.showSearchResults = true;} else {this.userService.showSearchResults = false;}
   });
  }
}
