var backbone = require("backbone");
var db = require("../db");
var moment = require('moment');

var LOAD = "select * from library WHERE slug = $slug;";
var SAVE = "INSERT INTO library (title, slug, author, published) VALUES ($title, $slug, $author, $published);";
var UPDATE = "UPDATE library SET title = $title, author = $author WHERE slug = $slug;";
var DELETE = "DELETE FROM library WHERE title = $title";

module.exports = backbone.Model.extend({
  defaults:{
    title: "",
    author: "",
    published: "",
    slug: "new"
  },
  load: function(done){
    var self = this;
    var query = db.connection.prepare(LOAD);
    var data = this.toJSON();
    query.get({
    $slug:data.slug
    }, function(err, loaded) {
      self.set(loaded);
      done(err);
    });
  },
  save: function(done) {
    var self = this;
    if (this.get("slug") == "new") {
    var query = db.connection.prepare(SAVE);
    var data = this.toJSON();
    var slug = this.get("title").toLowerCase();
    console.log(data);

    query.run({
      $title: data.title,
      $author: data.author,
      $published: moment().format("dddd MMMM Do, YYYY"),
      $slug: slug
    }, function (err) {
        if(!err) {
          done(null, "Book sucessfully created")
        }
    }, done);
    console.log(done);
} else{
    var query = db.connection.prepare(UPDATE);
    var data = this.toJSON();

    query.run({
      $title: data.title,
      $author: data.author,
      $slug: slug
    }, done);
  }
},
  delete: function (done) {
    var self = this;
    var query = db.connection.prepare(DELETE);
    var data = this.toJSON();
    query.run({
      $title: data.title
    }, done);
  }

});
