module.exports = function( grunt ){

  grunt.initConfig({
    // FOLDERS PATHS, STORED IN VARIABLES
    dir : {
      "dev"         : "dev",
      "deploy"      : "deploy",
      "css"         : "scss",
      "js"          : "js",
      "fonts"       : "fonts",
      "images"      : "img",
      "currTask": grunt.cli.tasks[0] || "build"
    },
    //CLEAN TASK
    clean : {
      target : {
        src : "<%= dir.currTask %>/"
      }
    },
    //COPY TASK
    "copy" : {
      "dev" : {
        "files" : [
          {
            "expand" : true,
            "cwd": "<%= dir.dev %>",
            "src" : ["?(public||src||tests)/**/*"],
            "dest" : "<%= dir.currTask %>"
          }
        ]
      }
    },
    //RESPONSIVE IMAGES TASK
    responsive_images: {
       myTask: {
         options: {
           engine : "im",
           sizes: [{
             name: 'large',
             width: 640
           },{
             name: "large2",
             width: 1024,
             suffix: "_x2",
             quality: 60
           }]
         },
         files: [{
           expand: true,
           cwd: '<%= dir.currTask %>/',
           src: ['<%= dir.images %>/**.{jpg,gif,png}'],
           dest: '<%= dir.currTask %>/'
         }]
       }
     },
  });
  // LOAD TASKS
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-responsive-images");


  grunt.registerTask("default",[
    "clean",
    "copy:dev",
    "responsive_images"
  ]);
};
