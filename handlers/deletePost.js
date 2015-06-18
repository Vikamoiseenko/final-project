var Post = require("../models/post");

module.exports = function(req, reply) {
    var posts = new Post;
    posts.delete(function(err, done) {
      console.error(err);
        reply.redirect("/list")
   });
};
