var mongoose = require('mongoose');

function insert_data(model, data) {

    console.log(data);
    var _model = mongoose.model(model);
    var data_model = new _model(data);
    data_model.save(function (err)
    {
        // we've saved the dog into the db here
        if (err) throw err;

    });


}

module.exports.insert_data = insert_data;



