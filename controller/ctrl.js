/**
 * Created by DELL on 01/10/2015.
 */
var imagemodel=require('../model/image.js');
var imgPath = './public/images/test.jpg';
var fs=require('fs');

exports.create=function(req,res){

var obj=new imagemodel({

    title:req.body.title
});

    obj.img.data = fs.readFileSync(imgPath);
    obj.img.contentType = 'image/jpg';

    obj.save();
    console.log(obj);

    console.log('image saved');
    res.redirect('/');


}



exports.list = function(req,res){
    var query = imagemodel.find();


    query.sort({createdOn:'desc'}).limit(12).exec(function (err , result) {
        //var base64 = (result[0].img.data.toString('base64'));

        res.render('showlist',{notes:result});
    });
};