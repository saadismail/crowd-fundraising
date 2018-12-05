const pool=require('../config/db');
const convfunc=require('../controller/conversion');

function isCategory(category,callback){
  query=`Select * from Categories where cname='${category}'`;
  var feed;
  pool.query(query,(err,result)=>{
    console.log(result.length);
    if(err) throw err
    else{
      result.length!=0?callback(true):callback(false);
    }
  });
};
function isProject(title,callback){
  query=`Select * from Projects where title='${title}'`;
  pool.query(query,(err,result)=>{
    if(err) throw err
    else{
      result.length!=0?callback(true):callback(false);
    }
  });
}



module.exports.createProject=(req,res)=>{
  var title=convfunc.strconv(req.body.title);
  var proDesc=convfunc.strconv(req.body.proDesc);
  var milestone=convfunc.numconv(req.body.milestone);
  var fundsRecieved=convfunc.numconv(req.body.fundsRecieved);
  var proStatus=convfunc.intconv(req.body.proStatus);
  var maxVotes=convfunc.intconv(req.body.maxVotes);
  var totalVotes=convfunc.intconv(req.body.totalVotes);
  var creationDate='curdate()';
  var category=convfunc.strconv(req.body.category);
  isCategory(category,(val)=>{
    if(val){
      isProject(title,(val)=>{
        if(val) res.json({success:false,msg:"Project already present"});
        else{
          var query="Insert into Projects(title,proDesc,milestone,fundsRecieved,proStatus,maxVotes,totalVotes,creationDate,category) values(?,?,?,?,?,?,?,curdate(),?)";
          var values=[title,proDesc,milestone,fundsRecieved,proStatus,maxVotes,totalVotes,category];
          pool.query(query,values,(err,result)=>{
            if(err)throw err
            else res.send("Success");
      
          });
        }
      });
    }
    else{
      res.send("Create Category");
    }
  });
  
}

module.exports.getProject=(title,callback)=>{
    var query=`Select * from Projects where title='${title}'`;
    pool.query(query,(err,result)=>{
      pool.query(query,(err,result)=>{
        if(err) callback(err);
        else{
          if(result.length==0){
            callback("Project does not exist");
          }
          else{
            callback(null,JSON.parse(JSON.stringify(result[0])));
          }
        }
      });
    });
  
}
