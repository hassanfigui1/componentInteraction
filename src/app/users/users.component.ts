import { Component } from '@angular/core';
import { User } from '../classes/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = "pagination";
  cards :any;
  page : number = 1;
  count : number =0;
  tableSize: number = 9;
  tableSizes:any = [5,10,15,20];
  private user_id:any;
  ngOnInit() : void{
    this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("heloooooooooooo :         ",this.user_id);
    this.usersList;
  }
  
  user = new User(1,"Hassan Figuigui",25);
  user1 = new User(1,"Hassan Figuigui",25);
  user2 = new User(1,"Hassan Figuigui",25);
  user3 = new User(1,"Hassan Figuigui",25);
  user4 = new User(1,"Hassan Figuigui",25);
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
  usersList(){
    return this.users;
  }
  
  onTableDataChange(event:any){
    this.page = event;
    this.usersList();
  }

  deleteUser(user :any){
    return null;
  }
  updateUser(user:any){
    return null;
  }
  
  constructor(private activatedRoute: ActivatedRoute){}
  

}

