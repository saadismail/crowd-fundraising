const bcrypt=require("bcryptjs");
const pool=require('../config/db');
const convfunc=require('../controller/conversion');

function hashPassword(password){
  var pass;
  var salt=bcrypt.genSaltSync(10);
  var hash=bcrypt.hashSync(password,salt);
  console.log(hash);
  return hash;
}
  

module.exports.registerUser=function(req,res,next){
  var name=convfunc.strconv(req.body.username);
  var email=convfunc.strconv(req.body.email);
  var password=convfunc.strconv(req.body.password);
  password=hashPassword(password);
  var tfundsSent=convfunc.numconv(req.body.fundsSent);
  var cnic=convfunc.intconv(req.body.cnic);
  var ccNum=convfunc.intconv(req.body.ccNum);
  var userAddress=convfunc.strconv(req.body.userAddress);
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
module.exports.getUser=function(username,callback){
  var query=`Select * from regUser where(userName='${username}')`
  pool.query(query,callback);
};

module.exports.comparePassword=function(userPassword,hash,callback){
  bcrypt.compare(userPassword,hash,(err,isMatch)=>{
    if(err) throw err;
    callback(null,isMatch);
  })
}