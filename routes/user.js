const express=require("express");
const userRouter=express.Router();
const passport=require("passport");
const jwt=require("jsonwebtoken");
const userdb=require("../controller/userdb");
const pool=require('../config/db');
userRouter.post('/register',(req,res,next)=>{
  userdb.registerUser(req,res,next);
});
userRouter.post('/getUser',(req,res,next)=>{
 userdb.getUser(req,res,next);
});
module.exports=userRouter;