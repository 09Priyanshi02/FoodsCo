const mongoose = require("mongoose");
const db =require('./db')
 
// create an schema
var userSchema = new mongoose.Schema({
            Product: String,
            Price:String
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports={
     
    fetchData:function(callback){
       var userData=shop.find({});
       userData.exec(function(err, data){
           if(err) throw err;
           return callback(data);
       })
       
    }
}