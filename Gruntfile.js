module.exports = function( grunt ){

  grunt.initConfig({
    // FOLDERS PATHS, STORED IN VARIABLES
    dir : {
      "src"     : "src",
      "dev"     : "dev",
      "deploy"  : "deploy",
      "css"     : "scss",
      "js"      : "js",
      "fonts"   : "fonts",
      "images"  : "img",
      "currTask": grunt.cli.tasks[0] || "build"
    },
    //CLEAN TASK
    clean : {
      target : {
        src : "<%= dir.currTask %>/**/*"
      }
    },
    //RESPONSIVE IMAGES TASK
    responsive_images : {
      target : {
        options : {
          sizes : [
            
          ]
        },

      }
    }
  });
  // LOAD TASKS
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-responsive-images");


  grunt.registerTask("default",[
    "clean:target"
  ]);
};
