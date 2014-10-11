var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var yardimci = require('../util/yardimci.js');
var mongoose_crud = require('../util/mongoose_crud.js');


/* GET users listing. */
router.get('/', function (req, res) {


    mongoose.model("uye_rss_kategorileri").find(function (err, users) {

        //createData();


        res.send(users);
    });

});

function createData() {

    var Console = mongoose.model('uye_rss_kategorileri');
    var Game = mongoose.model('uye_rss_listesi');


    Console.create({
        name: 'Nintendo 64', manufacturer: 'Nintendo', released: 'September 29, 1996'
    }, function (err, nintendo64) {
        if (err) return done(err);


        Game.create({
            name: 'Legend of Zelda: Ocarina of Time', developer: 'Nintendo', released: new Date('November 21, 1998'), consoles: '54387eec3b03b9cb128e478a'
        }, function (err) {
            //if (err) return done(err);
            //example();
        })
    })

}


function kaydet() {

    var myid = mongoose_crud.createObjectId();
    var data = {   _id:myid,name: 'Nintendo 64', manufacturer: 'Nintendo', released: 'September 29, 1996' };
    mongoose_crud.insertData('uye_rss_kategorileri', data);


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