var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var uye_rss_listesiSchema = Schema({
    name: String
    , developer: String
    , released: Date
    , consoles: [{ type: Schema.Types.ObjectId, ref: 'uye_rss_kategorileri' }]
})
mongoose.model('uye_rss_listesi', uye_rss_listesiSchema);