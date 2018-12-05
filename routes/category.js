const express=require('express');
const catRouter=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const conv=require("../controller/conversion");
const pool=require('../config/db');
const config=require('../config/jwtConfig');

catRouter.post('/createCategory',(req,res,next)=>{
  var cname=conv.strconv(req.body.cname);
  var desc=conv.strconv(req.body.desc);
  var query=`INSERT into crowdfundraising.Categories(cname,description) values('${cname}','${desc}')`;
  pool.query(query,(err,result)=>{
    if(err) throw err
    res.send("Success");
  })
});
module.exports=catRouter;