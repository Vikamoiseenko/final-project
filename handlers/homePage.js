var db = require("../db");
var Post = require("../models/post");

module.exports = function(req, reply) {

  db.getAllPosts(function(err, list) {
   reply.view("index", {
     library: list,
     title: "Home Page",
   });
 })
};
