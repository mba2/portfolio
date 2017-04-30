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
           src: ['img/**.{jpg,gif,png}'],
           cwd: 'dev/',
           dest: 'build/tmp/'
         }]
       }
     },
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
