var mongoose = require('mongoose');
var Schema = mongoose.Schema;
dilSchema = new Schema({
    ad:String
});

mongoose.model("demo",dilSchema);