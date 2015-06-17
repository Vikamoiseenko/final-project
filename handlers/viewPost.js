var Post = require("../models/post");

module.exports = function(req, reply) {
  var post = new Post({
    slug: req.params.slug
  });
  post.load(function() {
    reply.view("view", {
      title: post.get("title"),
      library: post.toJSON()
    //  post: post.toJSON()

    })
  })
};
