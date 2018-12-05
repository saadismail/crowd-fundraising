const express=require("express");
const userRouter=express.Router();
const passport=require("passport");
const jwt=require("jsonwebtoken");
const userdb=require("../controller/userdb");
const conv=require("../controller/conversion");
const pool=require('../config/db');
const config=require('../config/jwtConfig');

userRouter.post('/register',(req,res,next)=>{
  userdb.registerUser(req,res,next);
});
userRouter.post('/getUsers',(req,res,next)=>{
 userdb.getUser(conv.strconv(req.body.username),(err,result)=>{
  res.json(result['userPassword']);
 });
});

userRouter.post('/authenticate',(req,res,next)=>{
  userdb.getUserByEmail(conv.strconv(req.body.email),(err,user)=>{
    if(err) throw err;
    if(!user){
      return res.json({success:false,msg:"User not found"});
    }
    userdb.comparePassword(conv.strconv(req.body.password),user.userPassword,(err,isMatch)=>{
      if(err) throw err;
      if(isMatch){
        
       const token= jwt.sign(user,config.secret,{expiresIn:604800});
        res.json({
          success:true,
          token:"JWT "+token,
          user: {
            id: user.userId,
            name: user.userName,
            email: user.userEmail,
            }
          
        });
      }
      else{
        return res.json({success:false,msg:`${user[0].userPassword},${user[0].userId}`})
    }
    });
  });
  
});
userRouter.get("/profile",passport.authenticate("jwt",{session:false}),(req,res,next)=>{
  res.json({user:req.user});
});
userRouter.post('/like',(req,res,next)=>{
  var uid=conv.intconv(req.body.userId);
  var pid=conv.intconv(req.body.projectId);
  var query=`Insert into crowdfundraising.user_likes_Projects(userId,projectId) values('${uid}','${pid}')`;
  pool.query(query,(err,result)=>{
    if(err) throw err;
    res.send("Success");
  });
});

userRouter.post('/vote',(req,res,next)=>{
  var uid=conv.intconv(req.body.userId);
  var pid=conv.intconv(req.body.projectId);
  var query=`Insert into crowdfundraising.user_likes_Projects(userId,projectId) values('${uid}','${pid}')`;
  pool.query(query,(err,result)=>{
    if(err) throw err;
    res.send("Success");
  });
});
userRouter.post('/sponsor',(req,res,next)=>{
  var uid=conv.intconv(req.body.userId);
  var pid=conv.intconv(req.body.projectId);
  var amount=conv.numconv(req.body.amount);
  var query=`Insert into crowdfundraising.user_likes_Projects(userId,projectId) values('${uid}','${amount}',curdate(),'${pid}')`;
  pool.query(query,(err,result)=>{
    if(err) throw err;
    res.send("Success");
  });
});
module.exports=userRouter;