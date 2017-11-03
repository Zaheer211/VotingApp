import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = {};
  uS: any;
  fS: any;
  rtr: any;
  constructor(
    private userService: UserService,
    private flashService: FlashMessagesService,
    private router: Router
  ) {
    this.uS = userService;
    this.fS = flashService;
    this.rtr = Router;
  }

  createUser(form: NgForm){
    if(this.uS.validateUser(form.value)){
      if(this.uS.validateEmail(form.value.email)){
        this.uS.createUser(form.value, (response) => {
          // console.log(response);
          this.router.navigate(['/sign-in']);
          this.fS.show("Your are registered successfully!!", {cssClass: 'alert-success', timeout:3000})
        })
      }else{
        this.fS.show("Please provide correct Email", {cssClass: 'alert-danger', timeout:3000})
      }
    }else{
      this.fS.show("Please fill in all fields", {cssClass: 'alert-danger', timeout:3000})
    }
  }

  ngOnInit() {
  }

}
