const express=require('express')
const app =express()
var fetchRouter = require('./route');
app.set('view engine','ejs')
app.use('/', fetchRouter);
app.listen(3000)