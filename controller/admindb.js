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
};

module.exports.registeradmin=function(req,res,next){
  var name=convertTostring(req.body.name);
  var post=convertTostring(req.body.post);
  var password=convertTostring(req.body.password);
  password=hashPassword(password);
  var cnic=convertToInt(req.body.cnic);
 // console.log(name+" "+email+" "+ password+" "+tfundsSent+" "+date+" "+cnic+" "+ccNum+" "+userAddress);
  var query=`insert into DbProj.regUser(adminName,
    adminPost,adminPassword,adminCNIC)
   values('${name}','${post}','${password}','${cnic}')`;
    pool.query(query,(err,result,fields)=>{
      if(err) throw err;
      res.send("Success");
    });

};


module.exports.getAdmin=function(req,res,next){
  var cnic=convertToInt(req.body.cnic);
    var query=`Select * from regUser where(adminCNIC='${cnic}')`
    pool.query(query,(err,result,field)=>{
      if(err) throw err;
      res.send(result);
    })
  };