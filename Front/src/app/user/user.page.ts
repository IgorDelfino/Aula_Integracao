import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  users;
  constructor(public userService:UserService ) {}

  ngOnInit() {
    this.listarUsers();
  }

  listarUsers(){
    this.userService.listarUsers().subscribe(
      (res)=>{
        console.log(res);
        this.users = res;
      });
  }
}
