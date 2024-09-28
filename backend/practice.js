const express = require('express');
const app= express();
const fs= require('fs');

// app.get('/',function(req,res){
//     fs.readFile('homepage.html',function(err,data){
//         if (err){
//             console.log(err);
//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })    
// }
// )

app.post('/',function(req,res){
  res.send('post');
  res.end();
}
);

app.listen(5000);