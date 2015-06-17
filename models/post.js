var backbone = require("backbone");
var db = require("../db");
var moment = require('moment');

var LOAD = "select * from library WHERE slug = $slug;";
var SAVE = "INSERT INTO library (title, slug, author, published) VALUES ($title, $slug, $author, $published);";
var UPDATE = "UPDATE library SET title = $title, author = $author WHERE slug = $slug;";
var DELETE = "DELETE * FROM library WHERE slug = $slug;";

module.exports = backbone.Model.extend({
  defaults:{
    title: "",
    author: "",
    published: "",
    id: "new"
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
    var id = this.get("id");
    var q = id == "new" ? SAVE : UPDATE;
    var query = db.connection.prepare(q);
    var data = this.toJSON();
    var slug = this.get("title").toLowerCase();
    console.log(data);

    db.connection.run(q, {
      $title: data.title,
      $author: data.author,
      $id: id == "new" ? undefined : data.id,
      $published: moment().format("dddd MMMM Do, YYYY"),
      $slug: slug
    }, done);
  }
});
