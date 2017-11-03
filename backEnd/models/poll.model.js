
const mongoose = require('mongoose');

let pollSchema = mongoose.Schema({

  title: {
    type: 'string',
    required: true
  },

  type: {
    type: 'string',
    required: true
  },

  labels: {
    type: [],
    required: true
  },

  voters: {
    type: []
  },

  label: {
    type: 'string',
    required: true
  },

  // data: {
  //   type: []
  // },

  userId: {
    type: 'string',
    required: true
  }

});

let Poll = module.exports = mongoose.model('Poll', pollSchema);

Poll.getAllPolls = function(callback){
  Poll.find(callback);
},

Poll.vote = function(pollId, lbToBUpdtd, voterAddress, callback){

  Poll.findOne({_id:pollId}, function(err, poll){
    if(err){
      callback(err);
    }else{
      console.log(poll);
      console.log(voterAddress);
      console.log(poll.voters);

      let updatedLabels;

      if(poll.voters.indexOf(voterAddress) < 0){

        for(let i = 0; i < poll.labels.length; i++){
          if(poll.labels[i].label === lbToBUpdtd){
            poll.labels[i].votes = poll.labels[i].votes + 1;
            updatedLabels = poll.labels;
          }
        }

        poll.voters.push(voterAddress);

        let updatedPollData = {
          title: poll.title,
          type: poll.type,
          label: poll.label,
          userId: poll.userId,
          voters: poll.voters,
          labels: updatedLabels
        }

        console.log(voterAddress);

        Poll.update({_id: pollId}, updatedPollData, function(err, response){
          if(err){
            callback(err);
          }else{
            callback(null, response)
          }
        })

      }else{
        callback(null, "Voter Ip Address already exists!");
      }

    }
  })
},

Poll.getAllPollsByAUser = function(userId, callback) {
  Poll.find({userId:userId}, callback);
},

Poll.getAPoll = function(id, callback){
  Poll.findOne({_id:id}, callback);
}

Poll.createAPoll = function(poll, callback){
  Poll.create(poll, callback);
}

Poll.deleteAPoll = function(id, callback){
  Poll.findByIdAndRemove({_id:id}, callback);
}
