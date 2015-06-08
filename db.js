var async = require("async");
var sqlite = require("sqlite3");
var db;


var shop = {
  connection: null,
  init: function(ready) {
  db  = new sqlite.Database("shopping.db", function(err) {
    if(err) {
      console.error("You have a problem with db");
      process.exit(1);
    }
    shop.connection = db;
    console.log(db);

    async.series([
      function(c) {
        db.run("Create table if not exists shopping (product, price);", c);
  },
  function(c){
    db.run("insert into shopping values ('bread', 3.99);");
  }
],
  function(err){
    if(ready) ready(err);
    });
  });

},
getShopping: function(c){
    console.log(db);
    db.all("SELECT * FROM shopping",c);
  },
  addShopping: function(payload){
    db.run("INSERT INTO shopping (product, price) VALUES ($product, $price)", {
      $product: payload.name,
      $price: payload.price
    });
  }
};
module.exports = shop;
