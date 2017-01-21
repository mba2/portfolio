// REMOVE A PARTIAL AND CONTINUES COMPILATING    -> TO DO
// ADD A SOURCEMAP FOR JS AND CSS   -> TO DO
module.exports = function(grunt){
  //TWO AVALIABLE VALUES FOR 'assets_mode': A string  named "single_file" or "multiple_files"
  var assetsMode = "single_file";

  var taskComplement = {
    "init" : function(){
            this.css();
            this.image();
    },
    "addEvent" : function(event){
      return grunt.event.on(event, function(action,filePath,callback){
        // callback
      });
    },
    "css" : function(){
      // this.addEvent("watch");
    },
    "image" : function() {
      // this.addEvent("watch",);
      grunt.event.on("watch",function(option,filePath){
        if(grunt.file.isMatch(grunt.config("watch.images.files"),filePath)) {
          grunt.config("imagemin.test.dest", "<%= dirs.production %>/test" );
          grunt.config("imagemin.test.src", 'dev/img/isJPG.jpg');
          // grunt.config("imagemin.test.src", "<%= dirs.development %>/img/*.{png,gif,jpg}" );
          grunt.log.writeln(grunt.config("imagemin.test.dest"));
          grunt.log.writeln(grunt.config( typeof "imagemin.test.src"));
            // grunt.log.writeln("catched");
            // grunt.config("imagemin.test.dest", "adssa");
            // grunt.log.writeln(grunt.config("imagemin.all.src"));
            // grunt.log.writeln(grunt.config("imagemin.build.dest"));
            // grunt.log.writeln(grunt.config("imagemin.test.dest"));
        }
      });
    }
  };


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
            src  : ["*.php","*.html"],
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
      temp  : {
        src: '<%= dirs.production %>/temp'
      },
      "img" : {
        "src" : "<%= dirs.production %>/img"
      }
    },

    "sass" : {
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
          "imagesDir"   : '<%= dirs.development %>/img',
          "sassDir"     : "<%= dirs.development %>/sass",
          "cssDir"      : '<%= dirs.production  %>/temp/css',
        }
      }
    },

  "cssmin" :{
    "options" : {
      "sourceMap" : true
    },
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

    "sprite" : {
      "build" : {
        "src"         : "<%= dirs.development %>/img/sprite/*.png",
        "dest"        : "<%= dirs.development %>/img/test.png",
        "destCss"     : "<%= dirs.development %>/sass/_sprites.scss",
        "cssFormat"   : "scss",
        "padding"     : 2,
        "spriteName"  : 'build',
        // imgPath: (function() {
        //     return ''+ "<%= dirs.production %>/img" + '/x-sprite-fnac.png?' + Math.random();
        // }())
      }
    },
    "uglify" : {
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
      "html_PHP" : {
        // options : {
        //   event : ["added","changed","deleted"]
        // },
        files : [
                  "<%= dirs.development %>/*.php",
                  "<%= dirs.development %>/*.html"
                ],
        tasks : [
                  "copy","injector","watch"
                ]
      },
      stylesheets : {
        files : [
                  "dev/sass/**/*.scss",
                  "dev/css/**/*.css",
                ],
        tasks : [
                "compass",
                 "cssmin:" + (assetsMode || "single_file"),
                 "clean:temp"
                ]
      },
      css : {
        files : [
                  "<%= dirs.development %>/css"
                ],
        tasks : [
                  "copy:"
                ]
      },
      js : {
        files: '<%= dirs.development %>/js/**/*.js',
        tasks: ["uglify:" + (assetsMode || "single_file"),
                "clean:temp"
               ]
      },
      images : {
        files : ['<%= dirs.development %>/img/**/*.{png,jpg,gif}'],
        tasks : [
                  "sprite",
                  "clean:img",        // REMOVE PREVIOUS IMAGES
                ],
          options: {
          spawn: false
        }
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
  grunt.loadNpmTasks("grunt-spritesmith");

  grunt.registerTask("finalTasks",[
    "copy",
    "injector",
    // "clean:temp",
    "watch"
  ]);


  var mainTasks = [
    "clean:build",
    "sprite",
    "compass",
    "cssmin:" + ( assetsMode || "single_file" ),
    "uglify:" + ( assetsMode || "single_file" ),
    'imagemin',
    "finalTasks",
  ];

  grunt.registerTask('default',mainTasks);
};


// INSERT, DELETE OR UPDATE SCSS FILES => OK
// INSERT, DELETE OR UPDATE CSS FILES => PENDING
