import { Component, OnInit } from '@angular/core';
import { PollDataService } from '../../services/poll-data.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  polls = [];
  userId : any;
  myChart1 : any;
  myChart2 : any;
  myChart3 : any;
  threePolls: any;

  constructor(
    private pollDataService: PollDataService,
    private userService: UserService,
    private router: Router
  ) {

    this.userId = this.userService.getUserData().id;

    pollDataService.getAllPolls((response) => {

      this.polls = response.data.polls;
      // console.log(response);
      let mostRecentThreePolls = [];
      let pollsArrLen = response.data.polls.length;
      for(let i = pollsArrLen-1; i >= pollsArrLen-3; i--){
        mostRecentThreePolls.push(response.data.polls[i]);
      }
      this.threePolls = mostRecentThreePolls;
      this.drawFromRecentPolls(mostRecentThreePolls);

    });

  }

  drawFromRecentPolls(recentPolls){

    if (this.myChart1) {
      this.myChart1.destroy();
    }

    var ctx1 = document.getElementById("myChart1");

    let labelsAndData1 = recentPolls[0].labels;
    let labels1 = [];
    let data1 = [];
    for(let i = 0; i < labelsAndData1.length; i++){
      labels1.push(labelsAndData1[i].label);
      data1.push(labelsAndData1[i].votes);
    }

    this.myChart1 = new Chart(ctx1, {

          type: recentPolls[0].type, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
          data:{
            labels: labels1,
            datasets:[{
              label: recentPolls[0].label,
              data: data1,
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
              display:false,
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
              xAxes: [{
                  display: false
              }],
                yAxes: [{
                    ticks: {
                        stepValue: 1,
                        beginAtZero:true
                    }
                }]
            }
          }
        });

        if (this.myChart2) {
          this.myChart2.destroy();
        }

        let ctx2 = document.getElementById('myChart2');

        let labelsAndData2 = recentPolls[1].labels;
        let labels2 = [];
        let data2 = [];
        for(let i = 0; i < labelsAndData2.length; i++){
          labels2.push(labelsAndData2[i].label);
          data2.push(labelsAndData2[i].votes);
        }

        this.myChart2 = new Chart(ctx2, {

              type: recentPolls[1].type, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
              data:{
                labels: labels2,
                datasets:[{
                  label: recentPolls[1].label,
                  data: data2,
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
                  display:false,
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
                  xAxes: [{
                      display: false
                  }],
                    yAxes: [{
                        ticks: {
                            stepValue: 1,
                            beginAtZero:true
                        }
                    }]
                }
              }
            });

            if(this.myChart3){
              this.myChart3.destroy();
            }

            let labelsAndData3 = recentPolls[2].labels;
            let labels3 = [];
            let data3 = [];
            for(let i = 0; i < labelsAndData3.length; i++){
              labels3.push(labelsAndData3[i].label);
              data3.push(labelsAndData3[i].votes);
            }

            let ctx3 = document.getElementById('myChart3');

            this.myChart3 = new Chart(ctx3, {

                  type: recentPolls[2].type, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
                  data:{
                    labels: labels3,
                    datasets:[{
                      label: recentPolls[2].label,
                      data: data3,
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
                      display:false,
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
                      xAxes: [{
                          display: false
                      }],
                        yAxes: [{
                            ticks: {
                                stepValue: 1,
                                beginAtZero:true
                            }
                        }]
                    }
                  }
                });

  }

  logout(){
    this.userService.logOut();
    this.router.navigate(['/sign-in']);
  }

  createPoll(){
    if(this.userService.loggedIn()){
      this.router.navigate(['create-poll/'+ this.userId]);
    }else{
      this.router.navigate(['/sign-in']);
    }
  }

  ngOnInit() {

  }

}
