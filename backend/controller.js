var fetchModel= require('./usermodel');
module.exports={
 
    fetchData:function(req, res){
      
      fetchModel.fetchData(function(data){
          res.render('shop',{userData:data});
      })
    }
}