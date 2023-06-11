import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user_id:any;
  user:any;
  test ="my button"; 
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router, private userService: UserInfoService){}
  ngOnInit() : void{
    this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.user_id = Number(this.user_id);
    this.user = this.userService.users.find((obj) => {
      return obj.getId === this.user_id;
    });          
  };
  
  edit(){
    this.user.age = this.user.age;
    this.router.navigate(['./']);
  }

  
}
