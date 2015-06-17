var async = require("async");
var sqlite = require("sqlite3");
var db;

var users = {
  vika: "12345",
  guest: "hello"
};

var database = {
  connection: null,
  init: function(ready) {
  db = new sqlite.Database("library.db", function(err) {
    if(err) {
      console.error("You have a problem with db");
      process.exit(1);
    }
    database.connection = db;
    console.log(db);

    async.series([
      function(c) {
        db.run("Create table if not exists library (title, slug, author, published);", c);
  },
  function(c){
    db.run("insert into library values ('Alchemist', '1', 'Paulo Coelho', '01051988');", c);
  },
      function(c) {
        db.run("Create table if not exists users (username, session, password);", c);
},
      function(c){
        db.run("DELETE from users", c);
},
      function(c) {
        db.run("INSERT INTO users (username, password) VALUES ($username, $password);", {
          $username: "vika",
          $password: "12345"
        }, c);
      },
    function(c) {
        db.run("INSERT INTO users (username, password) VALUES ($username, $password);", {
          $username: "guest",
          $password: "hello"
        }, c);
      },
],
  function(err){
    db.all("select * from users", console.log.bind(console));
    console.log(err);
    if(ready) ready(err);
    });
  });
},
addPosts: function(payload){
    db.run("INSERT INTO library (title, slug, author, published) VALUES ($title, $slug, $author, $published)", {
      $title: payload.title,
      $slug: payload.slug,
      $author: payload.author,
      $published: payload.published
    });
  },
getAllPosts: function(c) {
  console.log(db);
  database.connection.all("select * FROM library order by published DESC", c);
}

};
module.exports = database;
