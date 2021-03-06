
let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let User = require('../models/user.model.js');

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = 'my_secret';
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      User.findOne({id: jwt_payload.sub}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
              // or you could create a new account
          }
      });
  }));
}
