module.exports = function(grunt){
  //TWO AVALIABLE VALUES FOR 'assets_mode': A string  named "single_file" or "multiple_files"
  var assetsMode = "single_file";

  grunt.initConfig({
    dirs : {
      development : 'dev',
      production  : 'build'
    },
    copy : {
      build: {
        files : [
          {
            expand: true,
            cwd  : '<%= dirs.development %>',
            src  : '*.php',
            dest : '<%= dirs.production %>'
          },
          {
            expand: true,
            flatten: true,
            cwd  : '<%= dirs.development %>',
            src  : 'sass/fonts/*',
            dest : '<%= dirs.production %>/fonts'
          }
        ]
      }
    },
    clean : {
      build : {
        src : '<%= dirs.production %>'
      },
      temp : {
        src: '<%= dirs.production %>/temp'
      }
    },
    sass : {
      "build" : {
        options : {
          update : true,
          "compass" : true
        },
        files : [{
          expand : true,
          cwd: "<%= dirs.development %>/sass",
          src: ["**/*.scss"],
          dest: '<%= dirs.production %>/temp/css',
          ext: '.css'
        }]
      }
    },

    "compass" : {
      "dist" : {
        "options" : {
          "sassDir" : "<%= dirs.development%>/sass",
          "cssDir": '<%= dirs.production %>/temp/css',
        }
      }
    },


    cssmin :{
      "single_file" : {
        files : {
          "<%= dirs.production %>/css/app.css" : "<%= dirs.production %>/temp/css/**/*.css"
        }
      },
      "multiple_files" : {
        files : [{
          expand: true,
          cwd : "<%= dirs.production %>/temp/css",
          src : "**/*.css",
          dest: "<%= dirs.production %>/css",
          ext : ".css"
        }]
      }
    },
    uglify : {
      "single_file" : {
        files : {
          "<%= dirs.production %>/js/app.js" : ["<%= dirs.development %>/js/**/*.js"]
        }
      },
      "multiple_files" : {
        files : [{
          expand : true,
          cwd : "<%= dirs.development %>/js",
          src: "**/*.js",
          dest: "<%= dirs.production %>/js",
          ext: ".js"
        }]
      }
    },

    imagemin: {
      build : {
        files :[{
          expand: true,
          cwd : '<%= dirs.development %>/img',
          src : ['*.{png,jpg,gif}'],
          dest: '<%= dirs.production %>/img'
        }]
      }
    },

    injector : {
      options: {
        template: "<%= dirs.production %>/index.php",
        relative: true,
        addRootSlash : false
      },
      local_dependencies: {
        files: {
          '<%= dirs.production %>/index.php': ["<%= dirs.production %>/js/*.js",
                                               "<%= dirs.production %>/css/*.css"
                                              ],
        }
      }
    },

    watch : {
      html : {
        options : {
          event : ["added","changed","deleted"]
        },
        files : "<%= dirs.development %>/*.php",
        tasks : [
                  "finalTasks"
                ]
      },
      css : {
        options: {
          event : ['added','changed']
        },
        files : "dev/sass/**/*.scss",
        tasks : ["compass",
                 "cssmin:" + (assetsMode || "single_file"),
                 "clean:temp"
                ]
      },
      js : {
        options : {
          event : ['added','changed']
        },
        files: 'dev/js/**/*.js',
        tasks: ["uglify:" + (assetsMode || "single_file"),
                "clean:temp"
               ]
      },
      images : {
        options : {
          event: ['added','changed','deleted']
        },
        files : ['dev/img/*.{png,jpg,gif}'],
        tasks : ['imagemin']
      }
    }
});

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks("grunt-contrib-compass");

  grunt.registerTask("finalTasks",[
    "copy",
    "injector",
    "clean:temp"
  ]);

  var mainTasks = [
    "clean:build",
    "sass",
    'imagemin',
    "cssmin:" + ( assetsMode || "single_file" ),
    "uglify:" + ( assetsMode || "single_file" ),
    "finalTasks",
    "watch"
  ];

  grunt.registerTask('default',mainTasks);
};
