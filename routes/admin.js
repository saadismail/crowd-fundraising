const express=require("express");
const adminRouter=express.Router();
const passport=require("passport");
const jwt=require("jsonwebtoken");
const userdb=require("../controller/admindb");
const pool=require('../config/db');
adminRouter.post('/register',(req,res,next)=>{
  userdb.registeradmin(req,res,next);
});
adminRouter.post('/getUser',(req,res,next)=>{
 userdb.getAdmin(req,res,next);
});
module.exports=userRouter;