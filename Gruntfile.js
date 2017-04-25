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
          sizes :[
            {
              "name"  : "small",
              "width" : 320
            },
            {
              "name"  : "medium",
              "width" : 768
            },
            {
              "name"  : "large",
              "width" : 1400
            },
            {
              "name"  : "full-hd",
              "width" : 1920
            }
          ]
        },
        files: [{
            expand : true,
            // cwd: "<%= dir.dev %>/<%= dir.images %>",
            cwd: "dev/img",
            src: "*.{jpg,gif,png}",
            // dest : "<%= dir.currTask %>/<%= dir.images %>"
            dest : "build/img"
        }]
      }
    }
  });
  // LOAD TASKS
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-responsive-images");


  grunt.registerTask("default",[
    "clean:target",
    "responsive_images"
  ]);
};
