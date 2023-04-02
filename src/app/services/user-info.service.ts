import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  user:any[] = [];
  users: Array<User> = [
    new User(1,"Hassan Figuigui",25),
    new User(2,"James blunt",26),
    new User(3,"Sanaa alami",23),
    new User(4,"imane sajid",32),
    new User(5,"image adergui",33),
    new User(6,"Soufiane jaana ",54),
    new User(7,"Slimani warda",26),
    new User(8,"ayoub amani",37),
    new User(9,"amini chara ",43),
    new User(18,"dfdf",23)
  ];

  constructor() { }
}
