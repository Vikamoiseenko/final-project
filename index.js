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
    console.log("Ready!");
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

server.route(require("./routes"));
