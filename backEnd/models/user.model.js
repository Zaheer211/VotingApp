
let mongoose = require('mongoose');

let userSchema = mongoose.Schema({

  name : {
    type: 'string',
    required: true
  },

  username : {
    type: 'string',
    unique: true,
    required: true
  },

  email : {
    type: 'string',
    required: true
  },

  password : {
    type: 'string',
    required: 'true'
  }

});

let User = module.exports = mongoose.model('User', userSchema);

User.createUser = function(user, callback){
  User.create(user, callback);
}

User.getUser = function(username, callback){
  User.findOne({username:username}, callback);
}
