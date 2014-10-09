var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var yardimci = require('../util/yardimci.js');
var mongoose_crud = require('../util/mongoose_crud.js');



/* GET users listing. */
router.get('/', function(req, res) {

    mongoose.model("dil").find(function(err,users)
    {

        kaydet();
        res.send(users);
    });

});

function kaydet()
{




    var data = { ad: 'tr' };
    mongoose_crud.insert_data('demo',data);
    /*
    * var urun = mongoose.model('dil');
     var dog = new urun({ ad: 'tr' });
     dog.save(function(err) {
     // we've saved the dog into the db here
     if (err) throw err;
     });
     */
}

module.exports = router;