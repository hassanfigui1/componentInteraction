import { Component } from '@angular/core';
import { User } from '../classes/user';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';

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
  usersList(){
    return this.userService.users;
  }
  users:any[] = this.userService.users;
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
  
  constructor(private activatedRoute: ActivatedRoute, private userService: UserInfoService){}
  

}

