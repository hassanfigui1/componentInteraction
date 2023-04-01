import { Component } from '@angular/core';
import { User } from '../classes/user';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [NgbPaginationModule],
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user = new User(1,"Hassan Figuigui",25);
  user1 = new User(1,"Hassan Figuigui",25);
  user2 = new User(1,"Hassan Figuigui",25);
  user3 = new User(1,"Hassan Figuigui",25);
  user4 = new User(1,"Hassan Figuigui",25);
  users: Array<User> = [
    new User(1,"Hassan Figuigui",25),
    new User(1,"Hassan Figuigui",25),
    new User(1,"Hassan Figuigui",25),
    new User(1,"Hassan Figuigui",25)
  ];
  


}

