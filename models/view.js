var backbone = require("backbone");
var db = require("../db");

var LOAD = "select * from shopping";

module.exports = backbone.Model.extend({
  defaults:{
    name: "",
    product:[],
    price: 0
  },
  load: function(done){
    var self = this;
    var query = db.connection.prepare(LOAD);
    var data = this.toJSON();
    query.get({

    }, function(err, loaded) {
      self.set(loaded);
    });
  }
});
