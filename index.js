var requireDirectory = require('require-directory');

function m(dir) {
  var a = dir.split('app');
  
  if (a.length > 1) {
    a.pop();
    a.join('app');
  }else {
    throw "mount-controllers ERROR: " + dir + "里没有app目录";
  }
  var _dir = a[0] + "app/controllers";
  console.log(_dir);
  return requireDirectory(module, _dir);
}

module.exports = m;