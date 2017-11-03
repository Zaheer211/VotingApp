import { Component, OnInit } from '@angular/core';
import { PollDataService } from '../../services/poll-data.service';

@Component({
  selector: 'app-render-polls',
  templateUrl: './render-polls.component.html',
  styleUrls: ['./render-polls.component.css']
})
export class RenderPollsComponent implements OnInit {

  polls: any;

  constructor(private pollDataService: PollDataService) {

    pollDataService.getAllPolls((response) => {

      this.polls = response.data.polls;

    })

  }

  ngOnInit() {
  }

}
