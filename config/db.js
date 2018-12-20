const mysql=require('mysql');
var con = {
  host:"localhost",
  user:"root",
  password:"2755651",
  database:"crowdfundraising"
};
const pool=mysql.createPool(con);
module.exports=pool;