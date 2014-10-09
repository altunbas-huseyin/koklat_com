var mongoose = require('mongoose');
var Schema = mongoose.Schema;
dilSchema = new Schema({
    dil:String,dil_kod:String,kullan:Number
});

mongoose.model("dil",dilSchema);