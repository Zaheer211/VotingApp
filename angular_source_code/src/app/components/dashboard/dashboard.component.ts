import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PollDataService } from '../../services/poll-data.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId = "";
  pollsByUser = [];
  getAllPollsByAUser: any;

  constructor(
    private userService: UserService,
    private pollDataService: PollDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.userId = this.userService.getUserData().id;

    this.getAllPollsByAUser = function(){
      this.pollDataService.getAllPollsByAUser(this.userId, (response) => {
        // console.log(response.data.polls);
        this.pollsByUser = response.data.polls;
      })
    }
    this.getAllPollsByAUser();

  }

  deleteAPoll(poll){
    let pollId = poll._id;
    let pollOwnerId = poll.userId;

    let self = this;
    let confirmation = confirm("Do You really want to delete thic poll!")
    if(confirmation && pollOwnerId === this.userId){
      this.pollDataService.deleteAPoll(pollId, function(response){
        // console.log(response);
        // self.router.navigate(['/dashboard/' + self.userId]);
        self.getAllPollsByAUser();
      })
    }
  }

  ngOnInit() {
    
  }

}
