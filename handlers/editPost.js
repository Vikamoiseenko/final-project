var Post = require("../models/post");

module.exports = function(req, reply) {
    var posts = new Post({
        slug: req.params.slug
    });
    posts.load(function() {
        reply.view("post", {
            title: "Edit",
            library: posts.toJSON()
        })
   });
};
