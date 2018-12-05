const pool=require('../config/db');
const config=require('../config/jwtConfig');
const userController=require("../controller/userdb");
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
module.exports=function(passport){
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = config.secret;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    userController.getUserByEmail(jwt_payload.userEmail, function(err, user) {
      
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