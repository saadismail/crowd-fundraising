const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const cors=require("cors");
const passport=require("passport");
const mysql=require("mysql");
const port=8081;
const pool=require("./config/db");
const userdb=require("./controller/userdb");

pool.query('Select * from regUser;',(err,result,fields)=>{
  if(err) throw err;
  console.log("Query Successfull\n");
  console.log(result);
});
app=express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
const userRouter=require('./routes/user');
app.use('/user',userRouter);
app.post('/users',(req,res)=>{
});
app.listen(port,()=>{
  console.log("Server Connected");
})