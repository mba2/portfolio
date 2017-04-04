module.exports = function( grunt ){

  grunt.initConfig({
    dir : {
      "src"     : "src",
      "dev"     : "dev",
      "deploy"  : "deploy",
      "css"     : "scss",
      "js"      : "js",
      "fonts"   : "fonts",
      "images"  : "img",
      "currTask": grunt.cli.tasks[0]
    },
    //CLEAN
    clean : {
      target : {
        src : "<%= dir.currTask %>"
      }
    }
  });
  // LOAD TASKS
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");


  grunt.registerTask("default",[
    "clean:target"
  ]);
};
