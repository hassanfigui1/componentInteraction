import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  user_id:any;
  user:any;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserInfoService){}
  getUserById(id:any) {
      this.user = this.userService.users.find((obj:any) => {
        return obj.getId === id;
      });
  }
  ngOnInit() : void{
    this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(typeof(this.user_id));
    this.user_id = Number(this.user_id);
    console.log(typeof(this.user_id));
    this.user = this.userService.users.find((obj) => {
      return obj.getId === this.user_id;
    });    
    console.log(this.user);
    // this.getUserById(this.user_id);
    // console.log("heloooooooooooo :         ",this.user_id);
  }
}
