import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user_id:any;
  user:any;
  user_fullname:any;
  user_age:any;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserInfoService){}
  ngOnInit() : void{
    this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.user_id = Number(this.user_id);
    this.user = this.userService.users.find((obj) => {
      return obj.getId === this.user_id;
    });    
      this.user_fullname = this.user.getName();
      this.user_age = this.user.getAge();
  }

  edit(){
    return null;
  }

  
}
