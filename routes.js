var db = require("./db");


module.exports = [
  {
      method: "GET",
      path: "/assets/{param*}",
      handler: {
        directory: {
          path: "public"
}
        },
        method:"GET",
        path:"/login",
        handler: require("./handlers/getLogin")
      }, {
        method:"POST",
        path:"/login",
        handler: require("./handlers/postLogin")
      }, {
        method:"GET",
        path:"/",
        handler: require("./handlers/homePage")
      },{
        method:"GET",
        path:"/list/new",
        handler: require("./handlers/addPost")
      }, {
        method:"GET",
        path:"/list/{slug}",
        handler: require("./handlers/viewPost")
      }, {
        method:"GET",
        path:"/list/{slug}/edit",
        handler: require("./handlers/editPost")
      }, {
        method:"GET",
        path:"/list",
        handler: require("./handlers/homePage")
      }, {
        method:"POST",
        path:"/list/{slug}",
        handler: require("./handlers/sevePost")
      }, {
        method:"GET",
        path:"/list/",
        handler: require("./handlers/getPost")
      }

];
