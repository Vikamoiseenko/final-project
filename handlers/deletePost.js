var Post = require("../models/post");

module.exports = function(req, reply) {
  var id = req.params.id;
  var model = new Post({
    id: id
  });
  model.set("id", id);
  model.delete(function(err) {
    var data;
    if(err) {
      console.log(err);
    } else {
      data = model.toJSON();
    }
    reply.view("delete", {
      title: data.name,
      library: model.toJSON()
    });
  }) ;
};
