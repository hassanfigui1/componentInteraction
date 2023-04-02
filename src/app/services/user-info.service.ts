import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  user:any[] = [];
  users: Array<User> = [
    new User(1,"Hassan Figuigui",25),
    new User(2,"Hassan Figuigui",25),
    new User(3,"Hassan Figuigui",25),
    new User(4,"Hassan Figuigui",25),
    new User(5,"Hassan Figuigui",25),
    new User(6,"Hassan Figuigui",25),
    new User(7,"Hassan Figuigui",25),
    new User(8,"Hassan Figuigui",25),
    new User(9,"Hassan Figuigui",25),
    new User(10,"Hassan Figuigui",25),
    new User(11,"Hassan Figuigui",25),
    new User(12,"Hassan Figuigui",25),
    new User(13,"Hassan Figuigui",25),
    new User(14,"Hassan Figuigui",25),
    new User(15,"Hassan Figuigui",25),
    new User(16,"Hassan Figuigui",25),
    new User(17,"Hassan Figuigui",25),
    new User(18,"dfdf",23),
    new User(19,"Hassan Figuigui",25)
  ];

  constructor() { }
}
