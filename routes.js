var db = require("./db");
var view = require("./models/view");


module.exports = [
  {
      method: "GET",
      path: "/assets/{param*}",
      handler: {
        directory: {
          path: "public"
          }
        }
      }, {
          method: "POST",
          path: "/getShopp/{id?}",
          handler: require("./handlers/setShopp")
          },{
          method: "GET",
          path: "/",
          handler: require("./handlers/getShopping")
        }, {
          method: "GET",
          path: "/getShopp/{id?}",
          handler: require("./handlers/getShopp")
      }
];
