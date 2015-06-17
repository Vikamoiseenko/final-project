var db =  require("../db");
var Post = require("../models/post");


module.exports = function(req, reply) {
  console.log("setpost");
  var payload = req.payload;
  console.log(payload);
  //db.addPosts(payload);
  db.getAllPosts(function(err) {
    console.error(err);
  });
  return reply.redirect("/");
  };
