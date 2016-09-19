var lsmod = require('./lsmodule');
var dirname = process.argv[2];
var ext = process.argv[3];

lsmod(dirname, ext, function(err, files){
    if(err){
      console.log("error:", err);
    }else{
      for(var index = 0; index < files.length; index ++){
        console.log(files[index]);
      }
    }
});
