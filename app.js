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


app=express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
const userRouter=require('./routes/user');
const proRouter=require('./routes/project');
const catRouter=require("./routes/category");
app.use('/user',userRouter);
app.use('/project',proRouter);
app.use('/categories/',catRouter);
app.post('/users',(req,res)=>{
});
app.listen(port,()=>{
  console.log("Server Connected");
})