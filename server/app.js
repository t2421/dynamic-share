var express = require('express')
var _ = require('lodash')

var app = express()
app.set("view engine", "ejs");

var data = [
    {id:"1",title:"title1",image:"http://hogehoge.image.jp",description:"description1"},
    {id:"2",title:"title2",image:"http://hogehoge.image.jp",description:"description2"},
    {id:"3",title:"title3",image:"http://hogehoge.image.jp",description:"description3"},
]
var server = app.listen(3000,function(){

})
app.get('/',function(req,res){
    res.render('./index.ejs')
})
app.get('/result/:id',function(req,res,next){
    var target = _.find(data,function(o){
        return o.id == req.params.id
    })
    res.render("./result.ejs",target)
})