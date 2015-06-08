//Gruntfile.js
module.exports = function(grunt) {

  grunt.registerTask("hello", function() {
    console.log("Hello from Grunt!");
    grunt.file.write("build/test.txt", "This file is written sync");
  });

  grunt.registerTask("hi", ["hello"]);
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-contib-watch");
  grunt.loadNpmTasks("grunt-autoprefixer");





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
  },
  autoprefixer: {
    dev: {
      expand: true,
      flatten: true,
      src: "src/css/**/*.css",
      dest: "build/css/"
    }
  },
  watch: {
    options: {
      livereload: true
    },
    html:{
      files: "**/*.html"
    },
    js: {
      files: "**/*.js"
    },
    prefix: {
      files: "src/css/**/*.css",
      tasks: ["autoprefixer"]
    }
  }
});


}
