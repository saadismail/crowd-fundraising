const pool=require('../config/db');
const config=require('../config/jwtConfig');
const userController=require("../controller/userdb");
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
module.exports=function(passport){
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secret;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  console.debug(jwt_payload);
    userController.getUser({username: jwt_payload.userName}, function(err, user) {
      user=JSON.stringify(JSON.parse(user[0]));
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
            
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

}