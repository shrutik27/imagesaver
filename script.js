

var a = function a(){
    const cherio=require('cherio');
const request=require('request');
const fs=require('fs')

const download=require('node-image-downloader');


var x=document.getElementById('url');
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
//ssigning value
      
      
    })
   
    } 
}) 
}
module.exports.a=a;

