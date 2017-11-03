import { Component, OnInit } from '@angular/core';
import { PollDataService } from '../../services/poll-data.service';
import { UserService } from '../../services/user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  poll : {
    title: "",
    type: "",
    label: "",
    labels: ""
  };

  userId: "";

  constructor(
    private pollDataService: PollDataService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.poll = {
      title: "",
      type: "",
      label: "",
      labels: ""
    };
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      // console.log(params['userId']);
    })
  }

  createPoll(form: NgForm){
    // console.log(form.value);

    let validTypes = ['bar', 'pie', 'doughnut'];
    let isGraphTypeValid = false;
    if(validTypes.indexOf(form.value.type.toLowerCase()) >= 0){
      isGraphTypeValid = true;
    }

    if(isGraphTypeValid && form.value.title && form.value.type && form.value.label && form.value.labels){

      this.poll.title = form.value.title;
      this.poll.label = form.value.label;
      this.poll.type = form.value.type;
      this.poll.labels = form.value.labels;

      let self = this;

      this.pollDataService.setPollData(this.poll, this.userId, function(poll){
        if(poll){
          // console.log(poll);
          self.pollDataService.createAPoll(poll, function(response){
            // console.log(response);
            if(response.data.success){
              // console.log("Poll Created Successfully!!");
              self.router.navigate(['/dashboard/'+ self.userId]);
            }
          })
        }
      });
    }else{
      alert("Fill in all Fields and Use Valid Graph Type from Provided list");
    }
  }

  logout(){
    this.userService.logOut();
    this.router.navigate(['/sign-in']);
  }

  ngOnInit() {
  }

}
