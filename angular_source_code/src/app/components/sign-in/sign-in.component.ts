import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: {};
  uS: any;
  rtr: any;
  fS: any;

  constructor(
    private userService: UserService,
    private flashService: FlashMessagesService,
    private router: Router
  ) {
    this.uS = userService;
    this.rtr = router;
    this.fS = flashService;
  }

  authenticateUser(form: NgForm){
    if(form.value.username == "" || form.value.password == ""){
      this.fS.show("Provide both username and password!", {cssClass: 'alert-danger', timeout:3000})
    }else{
      this.user = form.value;
      this.uS.authenticateUser(this.user, (response) => {
        if(!response.data.success){
          this.fS.show(response.data.msg, {cssClass: 'alert-danger', timeout:3000});
        }else{
          // console.log(response);
          this.uS.storeUserData(response.data.token, response.data.user);
          this.rtr.navigate(['/dashboard/'+ response.data.user.id]);
        }
      });
    }

  }

  ngOnInit() {
  }

}
