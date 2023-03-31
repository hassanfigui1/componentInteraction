import { Component } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user = new User(1,"Hassan Figuigui",25);
  users: User[] = [];


}
