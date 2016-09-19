var fs = require('fs');
var path = require('path');
module.exports = function ( dirname, ext, callback){
    fs.readdir(dirname, function(err, files){
      if(err){
          return callback(err,null);
        }else{
          var result = [];
          for(var index = 0; index < files.length; index ++){
            if(path.extname(files[index]).substring(1) === ext){
              result.push(files[index]);
            }
          }
          callback(null, result);
        }
    });
};
