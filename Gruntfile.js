//Gruntfile.js
module.exports = function(grunt) {

  grunt.registerTask("hello", function() {
    console.log("Hello from Grunt!");
    grunt.file.write("build/test.txt", "This file is written sync");
  });

  grunt.registerTask("hi", ["hello"]);
  grunt.loadNpmTasks("grunt-nodemon");


grunt.registerTask("default", ["nodemon"])
grunt.initConfig({
  nodemon: {
    dev: {
      script: "index.js"
    }
  },
  template: {
    files: "**/*.html",
    tasks: ["hello"]
  }
});

}
