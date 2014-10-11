var mongoose = require('mongoose');

function insertData(model, data) {

    var _model = mongoose.model(model);
    var data_model = new _model(data);
    data_model.save(function (err, insert_data)
    {
        // we've saved the dog into the db here
        if (err) {throw err}

    });


}
module.exports.insertData = insertData;


function createObjectId() {
    var ObjectID = require('mongodb').ObjectID;
    var objectId = new ObjectID();
    return objectId;
}
module.exports.createObjectId = createObjectId;



