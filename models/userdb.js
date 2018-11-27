const bcrypt=require("bcryptjs");
const pool=require('../config/db');


function convertTostring(temp){
  return temp.toString();
}
function convertToInt(temp){
  return parseInt(temp);
}
function convertToNum(temp){
  
  return Number(temp);
}
function hashPassword(password){
  var pass;
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
      if(err) throw err;
      pass=hash;
    });
  });
  return pass;
}

module.exports.registerUser=function(req,res,next){
  var name=convertTostring(req.body.name);
  var email=convertTostring(req.body.email);
  var password=convertTostring(req.body.password);
  password=hashPassword(password);
  var tfundsSent=convertToNum(req.body.fundsSent);
  var cnic=convertToInt(req.body.cnic);
  var ccNum=convertToInt(req.body.ccNum);
  var userAddress=convertTostring(req.body.userAddress);
 // console.log(name+" "+email+" "+ password+" "+tfundsSent+" "+date+" "+cnic+" "+ccNum+" "+userAddress);
  var query=`insert into DbProj.regUser(userName,
    userEmail,userPassword,dateOfReg,cnic,creditCardNo,userAddress)
   values('${name}','${email}','${password}',
   curdate(),'${cnic}','${ccNum}','${userAddress}')`;
    pool.query(query,(err,result,fields)=>{
      if(err) throw err;
      res.send("Success");
    });

};
module.exports.getUser=function(req,res,next){
var username=req.body.username;
  var query=`Select * from regUser where(userName='${username.toString()}')`
  pool.query(query,(err,result,field)=>{
    if(err) throw err;
    res.send(result);
  })
};