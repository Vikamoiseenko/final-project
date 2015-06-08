var hapi = require("hapi");
var server = new hapi.Server();
var db = require("./db");
var view = require("./models/view");


server.connection({ port: 8000});
server.start();

db.init(function(err) {
  if(err) {
    console.log("not working")
    return console.error("not working");
  }
  console.log("Database ready, starting server.......");
  server.start(function() {
    console.log("Good to go!");
  });
});

server.views({
  path: "templates",
  engines: {
    html: require("handlebars")
  },
  isCached: false,
  layoutPath: "layouts",
  layout: "default",
});

server.route({
  method: "POST",
  path: "/{id?}",
  handler: function(req, reply) {
    var payload = req.payload;
    console.log(payload);
    db.addShopping(payload);
    }
  });


server.route({
  method: "GET",
  path: "/",
  handler: function(req, reply) {
    reply.view("view", {
      shoppingList: null
    });
    }
});

server.route({
  method: "GET",
  path: "/add",
  handler: function(req, reply) {
    reply.view("add");
    }
});


server.route({
  method: "GET",
  path: "/assets/{param*}",
  handler: {
    directory: {
      path: "public"
    }
  }
});
