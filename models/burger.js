// Import ORM connection.
var orm = require("../config/orm.js");

var burger = {
    All: function (cb) {
        orm.All("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    updateOne: function (id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;