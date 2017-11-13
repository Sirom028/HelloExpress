var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});

function findAll(req, res) {
    var query = {};
    db.collection("users").find(query)
        .toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
        });
};
function findByName(req, res) {
    var name = req.params.name;
    db.collection("users")
        .findOne({ 'first_name': name },
        function (err, item) {
            res.send(item);
        });
};
function findByRole(req, res) {
    var role = req.params.role;
    var query = {'role': role};
    db.collection("users").find(query)
        .toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
        });
};
module.exports = {
    findAll: findAll,
    findByName: findByName,
    findByRole: findByRole
};
