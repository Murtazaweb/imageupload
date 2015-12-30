var mongoose=require('mongoose');
var thumbnailPluginLib = require('mongoose-thumbnail');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;
var path = require('path')
var uploads_base = path.join(__dirname, "uploads")
var Schema=mongoose.Schema;

var appSchema = new Schema({

    title:String,
    img: { data: Buffer, contentType: String }


});



module.exports=mongoose.model('imagestore',appSchema);