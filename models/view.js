var backbone = require("backbone");
var db = require("../db");

var LOAD = "select * from shopping WHERE product = $product;";
var SAVE = "INSERT INTO shopping (product, price) VALUES ($product, $price);";
var UPDATE = "UPDATE shopping SET product = $product WHERE price = $price;";
var DELETE = "DELETE * FROM shopping WHERE price = $price;";

module.exports = backbone.Model.extend({
  defaults:{
    name: "New Post",
    product: "",
    price: 0,
    id: "new"
  },
  load: function(done){
    var self = this;
    var query = db.connection.prepare(LOAD);
    var data = this.toJSON();
    query.get({
      $product:data.product
    }, function(err, loaded) {
      self.set(loaded);
      done(err);
    });
  },
  save: function(done) {
    var self = this;
    var id = this.get("id");
    var q = id == "new" ? SAVE : UPDATE;
    var query = db.connection.prepare(q);
    var data = this.JSON();
    var product = this.get("product").toLowerCase();

    query.run({
      $product: data.product,
      $price: data.price,
      $id: id == "new" ? undefined : data.id
    }, done);
  }
});
