var express = require('express');
var router = express.Router();
var ctrl=require('../controller/ctrl.js');
var fs=require('fs');
var im=require('imagemagick');
var multipart=require('connect-multiparty')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/upload',multipart(),function(req,res){



return ctrl.create(req,res);


    });
router.get('/show',multipart(),function(req,res){
    return ctrl.list(req,res)
})













module.exports = router;
