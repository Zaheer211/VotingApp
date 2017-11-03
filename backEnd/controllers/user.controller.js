
let bcrypt = require('bcrypt');
let User = require('../models/user.model.js');
let jwt = require('jsonwebtoken');
let passport = require('passport');

module.exports = {

  createUser : function(req, res){
    let user = {};
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    console.log(user);
    bcrypt.hash(req.body.password, 10, function(err, hash){
      if(err){
        throw err;
      }
      user.password = hash;
      // console.log(user);
      User.createUser(user, (err, user) => {
        if(err){
          res.json({success:false, msg: "error while saving user data.."});
        }else{
          res.json({success:true, msg: "user successfully created!"})
        }
      });
    });
  },

  authenticateUser : function(req, res) {

    let username = req.body.username;
    let password = req.body.password;

    User.getUser(username, (err, user) => {
      if(err){
        throw err;
      }
      if(user){
        bcrypt.compare(password, user.password, function(error, response) {
          if(error){
            throw error;
          }
          if(response){
            let token = jwt.sign(user, "my_secret", {expiresIn: 4545454});
            res.json({
              success : true,
              token : 'JWT ' + token,
              user : {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email
              }
            });
          }else{
            res.json({success:false, msg:"incorrect password"})
          }
        });
      }else{
        res.json({success:false, msg: "Username is incorrect"})
      }
    });
  }
}
