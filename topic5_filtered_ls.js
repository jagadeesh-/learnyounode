var fs = require('fs');
var path = require('path');
var matchedFiles = [];
if(process.argv[2] != null && process.argv[3] != null{
 fs.readdir(process.argv[2],function(err, files){
  if(err === null){
    for(var index = 0; index < files.length; index ++){
     if(path.extname(files[index]).substring(1) === process.argv[3]){
      console.log(files[index]);
     }
    }
  }
 });
}else{
   console.log("Please enter valid input");
}
