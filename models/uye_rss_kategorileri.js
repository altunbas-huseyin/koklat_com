var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var uye_rss_kategorileriSchema = Schema({
    name: String
    , manufacturer: String
    , released: Date
})
mongoose.model('uye_rss_kategorileri', uye_rss_kategorileriSchema);
