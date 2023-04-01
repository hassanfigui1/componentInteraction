import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user_id:any;
  constructor(private activatedRoute : ActivatedRoute){}
  ngOnInit() : void{
    this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("heloooooooooooo :         ",this.user_id);
  }
}
