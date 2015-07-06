var requireDirectory = require('require-directory');

function m(dir) {
  var a = dir.split('app')  
  
  if(a.length == 2){
    
  }else if(a.length !== 2){
    a = dir.split('node_modules');
  }else{
    throw  "mount-controllers ERROR: " + dir + "里没有node_modules目录";
  }
  
  var _dir = a[0] + "app/controllers";
  return requireDirectory(module, _dir);
}

module.exports = m;