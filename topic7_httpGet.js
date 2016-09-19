var http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding("utf8");
  
  // while reading response
  response.on("data", function(data) {
    console.log(data);
  });
  
  // log error
  response.on("error",function(error){
    console.log('error:' + error);
  });
  
  // response end
  response.on('end',function(){
    // after response 
  });
});
