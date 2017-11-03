import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import Chart from 'chart.js';
import { PollDataService } from '../../services/poll-data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  poll : any;
  pollId = '';
  getAPoll: any;
  userId: any;

  constructor(
    private pollDataService: PollDataService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ){
      let self = this;
      let myChart = null;

      this.userId = this.userService.getUserData().id;

      this.activatedRoute.params.subscribe((params: Params) => {
        this.pollId = params['id'];

        this.getAPoll = function getAPoll(){

          pollDataService.getAPoll(self.pollId).subscribe(response =>  {
            // console.log(response);
            self.poll = response;
            // console.log(self.poll);

            if (myChart) {
              myChart.destroy();
            }

            var ctx = document.getElementById("myChart");

            let labels = response.poll.labels;
            let labelsArray = [];
            let dataArray = [];
            for(let i = 0; i < labels.length; i++){
              labelsArray.push(labels[i].label);
              dataArray.push(labels[i].votes);
            }

            myChart = new Chart(ctx, {

              type: response.poll.type, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
              data:{
                labels: labelsArray,
                datasets:[{
                  label: response.poll.label,
                  data: dataArray,
                  //backgroundColor:'green',
                  backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ],
                  borderWidth:0,
                  borderColor:'#777',
                  hoverBorderWidth:0,
                  hoverBorderColor:'#000'
                }]
              },
              options:{
                title:{
                  display:false,
                  text:'Elections 2018',
                  fontSize:25
                },
                legend:{
                  display:true,
                  position:'bottom',
                  labels:{
                    fontColor:'#000'
                  }
                },
                layout:{
                  padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                  }
                },
                tooltips:{
                  enabled:true
                },

                scales: {
                    yAxes: [{
                        ticks: {
                            stepValue: 1,
                            beginAtZero:true
                        }
                    }]
                }
              }
            });

          });
        }

        this.getAPoll();

      });
  }

  submitVote(votedFor){

    // console.log(this.poll);
    let previousVotes : Number;
    let pollId = this.poll.poll._id;
    let labelsArr = this.poll.poll.labels;
    let self = this;

    for(let i = 0; i < labelsArr.length; i++){
      if(labelsArr[i].label === votedFor){
        previousVotes = labelsArr[i].votes;
      }
    }

    this.pollDataService.updateVotesForAPoll(pollId, votedFor, previousVotes, function(response){
      if(response.data.success && !(response.data.res === "Voter Ip Address already exists!")){
        self.getAPoll();
      }else{
        alert("You have already voted for this poll!");
      }
    })

  }

  ngOnInit() {

  }

}
