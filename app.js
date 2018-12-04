const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const cors=require("cors");
const passport=require("passport");
const mysql=require("mysql");
const port=8081;
const pool=require("./config/db");
const bcrypt=require('bcryptjs');
const userdb=require("./controller/userdb");

pool.query('Select * from regUser where(userName="khan")',(err,result,fields)=>{
  if(err) throw err;
  console.log("Query Successfull\n");
  result=JSON.stringify(result);
  result=JSON.parse(result)
  userdb.comparePassword("helloWorl",result[0].userPassword,(err,isMatch)=>{
    if(err) throw err;
    if(isMatch){
      console.log('t');
    }
    else{
      console.log(result[0].userPassword);
      console.log(isMatch);
  }
  });


});
app=express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
const userRouter=require('./routes/user');
app.use('/user',userRouter);
app.post('/users',(req,res)=>{
});
app.listen(port,()=>{
  console.log("Server Connected");
})