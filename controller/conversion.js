module.exports.strconv=function (temp){
  return temp.toString();
}
module.exports.intconv=function(temp){
  return parseInt(temp);
}
module.exports.numconv=function (temp){
  
  return Number(temp);
}
module.exports.objconv=function(temp){
  temp=JSON.stringify(temp);
  temp=JSON.parse(temp);
  return temp;
}