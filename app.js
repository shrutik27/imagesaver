const express = require("express"); 
const bodyParser = require("body-parser"); 
const { text } = require("body-parser");


const cherio=require('cherio');
const request=require('request');
const fs=require('fs');
;

const download=require('node-image-downloader');
// New app using express module 
const app = express(); 
app.use(bodyParser.urlencoded({ 
    extended:true
})); 
  
app.get("/", function(req, res) { 
  res.sendFile(__dirname + "/index.html"); 
}); 
  
app.post("/", function(req, res) { 
  var num1 = String(req.body.num1);
  var x = num1


  var WriteStream  = fs.createWriteStream("ImagesLink.txt", "UTF-8")
  
  request(x,(err,resp,html)=>{
     
      if(!err){
          const $ = cherio.load(html);
          $("img").each((index, image)=>{
          var img = $(image).attr('src');
  
          var baseUrl = x ;
          var Links = baseUrl + img;
          download({
              
              imgs:[
                  {
                  uri:Links
                  } 
              ],
              dest:'./download'
              
          })
          //writing links in file
          WriteStream.write(Links);
          WriteStream.write("\n");


        
        
      })
     
      } 
  }) 
  
    
    
  res.send("Url data  " + num1); 
 res.write('<html><body>');
          res.write('<img src="' + Links + '" />');
          res.write('</body></html>');
          res.end(); 
            
}); 
  
app.listen(3000, function(){ 
  console.log("port is running at http://localhost:3000/"); 
}) 






