var Post = require("../models/post");

module.exports = function(req, reply) {
    var posts = new Post();
    posts.delete(function() {
      data = posts.toJSON();
        reply.redirect("/list");
   });
};
