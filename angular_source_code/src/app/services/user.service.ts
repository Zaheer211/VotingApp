import { Injectable } from '@angular/core';
import axios from 'axios';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserService {

  authToken: any;
  user: any;

  constructor() { }

  validateUser(user){
    if(user.name && user.username && user.email && user.password){
      return true;
    }else return false;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  createUser(user, callback){
    axios.post('poll/create', user)
      .then(function(response){
        callback(response);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  authenticateUser(user, callback){
    axios.post('poll/authenticate', user)
      .then(function(response){
        callback(response);
        // console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getUserData(){
    if(this.loggedIn()){
      let userData = JSON.parse(localStorage.getItem('user'));
      return userData;
    }else{
      return {
        success: false,
        id: null
      }
    }
  }

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn() {
    return tokenNotExpired("id_token");
  }

}
