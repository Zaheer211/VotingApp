import { Injectable } from '@angular/core';
import axios from 'axios';
import { UserService } from './user.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PollDataService {

  usrSrvc: any;

  constructor(
    private userService: UserService,
    private http: Http
  ) {
    this.usrSrvc = userService;
  }

  getAllPolls(callback){
    axios.get('poll/home')
      .then(function(response){
        // console.log(response);
        callback(response);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  updateVotesForAPoll(pollId, label, prevVotes, callback){
    let updatedData = {
      pollId : pollId,
      label: label,
      previousVotes: prevVotes
    }
    axios.post('poll/updateVotes', updatedData)
      .then(function(response){
        callback(response);
      })
      .catch(function(err){
        console.log(err);
      })
  }

  getAllPollsByAUser(userId, callback){
    axios.get('poll/getAllPollsByAUser/' + userId)
      .then(function(response){
        callback(response);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  getAPoll(id){
    // axios.get('http://localhost:3001/getAPoll/'+ id)
    //   .then(function(response){
    //     callback(response);
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //   })
    return this.http.get('poll/getAPoll/' + id)
      .map(res => res.json());
  }

  setPollData(pollData, userId, callback){
    let poll = {
      title: "",
      userId: "",
      type: "",
      label: "",
      labels: [],
    };

    function getPollLabelsArray(){
      let pollLabels = pollData.labels.split(",");
      let finalPollLabels = [];
      for(let i = 0; i < pollLabels.length; i++){
        let label = pollLabels[i].trim()
        label = label[0].toUpperCase() + label.slice(1);
        let data = {
          label: "",
          votes: 0
        };
        data.label = label;
        finalPollLabels.push(data);
        if(i === pollLabels.length -1){
          return finalPollLabels;
        }
      }
    }

    poll.title = pollData.title[0].toUpperCase() + pollData.title.slice(1);
    poll.userId = userId;
    poll.type = pollData.type.toLowerCase();
    poll.label = pollData.label[0].toUpperCase() + pollData.label.slice(1);
    poll.labels = getPollLabelsArray();

    callback(poll);
  }

  createAPoll(poll, callback){
    let config = {
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : localStorage.getItem('id_token')
      }
    }

    axios.post('poll/addPoll', poll, config)
      .then(function(response){
        callback(response);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  deleteAPoll(pollId, callback){
    let config = {
      headers: {
        'Authorization': localStorage.getItem('id_token')
      }
    }
    axios.get('poll/removePoll/'+ pollId, config)
      .then(function(response){
        callback(response);
      })
      .catch(function(error){
        console.log(error);
      })
  }

}
