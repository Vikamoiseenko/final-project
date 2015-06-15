var db = require("../db");
module.exports = function(req, reply){
  db.getShopping(function(err, shoppingList){
    console.log(shoppingList);
    reply.view("view", {
      shoppingList: shoppingList
    });
  });
};
