var Post = require("../models/post");
//var async = require("async");

module.exports = function(req, reply) {
  var id = req.params.id;
  var model = new Post({
    id: id
  });

  if (slug == "new") {
    return reply.view("post", {
      title: "",
      post: model.toJSON()
    });
  }
  model.set("id", id);
  model.load(function(err) {
    var data;
    if(err) {
      console.log(err);
    } else {
      data = model.toJSON();
    }
    reply.view("view", {
      title: data.name,
      view: data
      //view: data
    });
  }) ;
};
