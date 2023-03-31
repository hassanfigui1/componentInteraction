import { Component } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user = new User(1,"Hassan Figuigui",25);
  user1 = new User(1,"Hassan Figuigui",25);
  user2 = new User(1,"Hassan Figuigui",25);
  user3 = new User(1,"Hassan Figuigui",25);
  user4 = new User(1,"Hassan Figuigui",25);
  users: User[] = [new User(1,"Hassan Figuigui",25),new User(2,"Malika Figuigui",24)];

}
