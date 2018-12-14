const express=require('express');
const proRouter=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const prodb=require("../controller/projectdb");
const conv=require("../controller/conversion");
const pool=require('../config/db');
const config=require('../config/jwtConfig');


proRouter.post('/createProject',(req,res,next)=>{
  prodb.createProject(req,res);
});

proRouter.post('/getProject',(req,res,next)=>{
  prodb.getProject(conv.strconv(req.body.title),(err,pro)=>{
    if(err) throw err;
    else res.json(pro);
  })
})
proRouter.get('/getProjects',(req,res,next)=>{
  prodb.getProjects((err,pro)=>{
    if(err) throw err;
    else res.json(pro);
  })
});
module.exports=proRouter;