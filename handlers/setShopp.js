var db =  require("../db");

module.exports = function(req, reply) {
  var payload = req.payload;
  console.log(payload);
  db.addShopping(payload);
  return reply.redirect("/");
  };
