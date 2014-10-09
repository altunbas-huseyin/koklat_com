
var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var uye_rss_kategorileriSchema = Schema({
    _id     : Number,
    ad      : String,
    yas     : Number,
    makaleler : [{ type: Schema.Types.ObjectId, ref: 'uye_rss_listesi' }]
});

var uye_rss_listesiSchema = Schema({
    yazar : { type: Number, ref: 'uye_rss_kategorileri' },
    baslik: String
});

//
var uye_rss_kategorileri  = mongoose.model('uye_rss_kategorileri', uye_rss_kategorileriSchema);
var uye_rss_listesi = mongoose.model('uye_rss_listesi', uye_rss_listesiSchema);
