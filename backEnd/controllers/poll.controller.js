
let Poll = require('../models/poll.model.js');

module.exports = {

  getAllPolls : function(req, res){
    Poll.getAllPolls(function(err, polls){
      if(err){
        res.json({success: false, msg: "error while getting polls data"})
      }else{
        res.json({success: true, polls: polls})
      }
    });
  },

  vote : function(req, res) {

    let pollId = req.body.pollId;
    let labelToBeUpdated = req.body.label;
    let voterAddress = req.clientIp;

    // console.log(voterAddress);

    Poll.vote(pollId, labelToBeUpdated, voterAddress, function(err, response){
      if(err){
        res.json({success: false, msg: "Votes could not be updated", err: err});
      }else{
        res.json({success: true, res: response});
      }
    })
  },

  getAllPollsByAUser : function(req, res) {
    let userId = req.params.id;
    Poll.getAllPollsByAUser(userId, function(err, polls){
      if(err){
        res.json({success: false, msg: "error while getting polls data"})
      }else{
        res.json({success: true, polls: polls})
      }
    });
  },

  getAPoll : function(req, res){
    let id = req.params.id;
    Poll.getAPoll(id, function(err, poll){
      if(err){
        res.json({success: false, msg: "error while getting poll data"})
      }else{
        res.json({success: true, poll: poll})
      }
    });
  },

  createAPoll : function(req, res){
    console.log(req.body);
    let poll = {};
    poll.title = req.body.title;
    poll.type = req.body.type;
    poll.labels = req.body.labels;
    poll.label = req.body.label;
    poll.data = req.body.data;
    poll.userId = req.body.userId;

    Poll.createAPoll(poll, function(err, poll){
      if(err){
        res.json({success: false, msg: "error while creating poll", error: err});
      }else{
        res.json({success: true, poll: poll});
      }
    });
  },

  deleteAPoll : function(req, res){
    let id = req.params.id;
    Poll.deleteAPoll(id, function(err, poll){
      if(err){
        res.json({success: false, msg: "error while deleting poll"});
      }else{
        res.json({success: true, msg: "Poll deleted Successfully"})
      }
    });
  }

}
