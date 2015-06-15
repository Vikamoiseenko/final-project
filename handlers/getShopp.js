var Shopp = require("../models/view");
//var async = require("async");

module.exports = function(req, reply) {
  var id = req.params.id;
  var model = new Shopp({
    id: id
  });

  if (id == "new") {
    return reply.view("add", {
      product: "New Product",
      view: model.toJSON()
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
      product: data.name,
      view: data
    });
  })  ;
};
