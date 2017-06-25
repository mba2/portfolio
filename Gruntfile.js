module.exports = function( grunt ){

  grunt.initConfig({
    // FOLDERS PATHS, STORED IN VARIABLES
    dir : {
      "source"      : "src",
      "dev"         : "dev",
      "deploy"      : "deploy",
      "css"         : "scss",
      "js"          : "js",
      "fonts"       : "fonts",
      "images"      : "img",
      "currTask"    : grunt.cli.tasks[0] || "dev"
    },
    //CLEAN TASK
    clean : {
      target : {
        src : "<%= dir.currTask %>/"
      }
    },
    //COPY TASK
    "copy" : {
      // THIS TARGET AIMS TO ALL PROJECT'S ASSETS
      "dev" : {
        "files" : [
          {
            "expand" : true,
            "cwd": "<%= dir.source %>",
            "src" : ["?(public||resources||tests)/**/*",
                    ],
            "dest" : "<%= dir.dev %>"
          }
        ]
      },
      // THIS TARGET AIMS TO ALL PROJECT'S FILES AND FOLDERS PREPARING THE RESULT TO BE DEPLOYED
      "deploy" : {
        "files" : [
          {
            "expand" : true,
            "cwd": "<%= dir.source %>",
            "src" : ["?(public||resources||tests)/**/*",
                    ],
            "dest" : "<%= dir.deploy %>"
          }
        ]
      },
      // THIS TARGET TRANSFERS ONLY BACKEND ASSETS
      "backEnd" : {
        "files" : [
          {
            "expand" : true,
            "cwd": "<%= dir.source %>",
            "src" : ["?(resources||tests)/**/*",
                    ],
            "dest" : "<%= dir.dev %>/"
          }
        ]
      },
      // THIS TARGET TRANSFERS ONLY FILES CONTAINING CSS
      "pureCSS" : {
        "files" : [
          {
            "expand" : true,
            "cwd": "<%= dir.source %>",
            "src" : ["public/**/*.css"],
            "dest" : "<%= dir.dev %>/public/styles",
            "flatten" : true
          }
        ]
      },
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
           src: ['**/<%= dir.images %>/**.{jpg,gif,png}'],
           dest: '<%= dir.currTask %>/'
         }]
       }
     },
     watch : {
       "backEnd" : {
         files : [
           "<%= dir.source %>/public/**/index.php",
           "<%= dir.source %>/?(resources|tests)/**/*",
         ],
         tasks : ["copy:backEnd"],
         options : { "event" : ["all"] }
       },
       "pureCSS" : {
         files : ["<%= dir.source %>/public/**/*.css"],
         tasks : ["copy:pureCSS"],
         options : { "event" : ["added","changed"] }
       },
       "deletedFiles" : {
         files : ["<%= dir.source %>/public/**/*.css"],
         tasks : ["copy:dev"],
        //  tasks : ["copy:pureCSS"],
         options : { "event" : ["deleted"] }
       }
     }
  });
  // LOAD TASKS
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadNpmTasks("grunt-contrib-watch");


  grunt.registerTask("dev",[
    "clean",
    "copy:pureCSS",
    // "copy:dev",
    // "responsive_images",
    "watch"
  ]);

  grunt.registerTask("deploy",[
    "clean",
    "copy:build",
    "responsive_images",
    // "watch"
  ]);

  grunt.registerTask("default", "dev");

};
