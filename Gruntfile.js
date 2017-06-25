module.exports = function (grunt) {

	grunt.initConfig({
		// FOLDERS PATHS, STORED IN VARIABLES
		dir: {
			"source": "src",
			"dev": "dev",
			"deploy": "deploy",
			"css": "scss",
			"js": "js",
			"fonts": "fonts",
			"images": "img",
			"currTask": grunt.cli.tasks[0] || "dev"
		},
		//CLEAN TASK
		clean: {
			"target" : { "src": "<%= dir.currTask %>/" },
			"public_PHP_HTML" : {  "src": "<%= dir.dev %>/public/*.{php,html}"},
			"backEnd" : { "src" : "<%= dir.dev %>/*(resources|tests)"}	
		},
		//COPY TASK
		"copy": {
			// THIS TARGET AIMS TO ALL PROJECT'S ASSETS
			// "dev": {
			// 	"files": [{
			// 		"expand": true,
			// 		"cwd": "<%= dir.source %>",
			// 		"src": ["?(resources||tests)/**/*", 
			// 				"public/*.{html,php}"	
			// 			   ],
			// 		// "src": ["?(public||resources||tests)/**/*", ],
			// 		"dest": "<%= dir.dev %>"
			// 	}]
			// },
			// THIS TARGET AIMS TO ALL PROJECT'S FILES AND FOLDERS PREPARING THE RESULT TO BE DEPLOYED
			// "deploy" : {
			//   "files" : [
			//     {
			//       "expand" : true,
			//       "cwd": "<%= dir.source %>",
			//       "src" : ["*(public||resources||tests)/**/*",
			//               ],
			//       "dest" : "<%= dir.deploy %>"
			//     }
			//   ]
			// },

			// THIS TARGET TRANSFERS ONLY ALTERED BACKEND ASSETS
			"backEnd": {
				"files": [{
					"expand": true,
					"cwd": "<%= dir.source %>",
					"src": ["*(resources||tests)/**/*", ],
					"dest": "<%= dir.dev %>/"
				}]
			},

			// THIS TARGET TRANSFERS ONLY ALTERED 'PUBLIC' FILES (.php files or .html files)
			"public_PHP_HTML": {
				"files": [{
					"expand": true,
					"cwd": "<%= dir.source %>",
					"src": "public/*.{php,html}",
					"dest": "<%= dir.dev %>/"
				}]
			},

			// // THIS TARGET TRANSFERS ONLY ALTERED FILES CONTAINING CSS
			"pureCSS": {
				"files": [{
					"expand": true,
					"cwd": "<%= dir.source %>",
					"src": ["public/**/*.css"],
					"dest": "<%= dir.dev %>/public/styles",
					"flatten": true
				}]
			},
		},
		//RESPONSIVE IMAGES TASK
		responsive_images: {
			myTask: {
				options: {
					engine: "im",
					sizes: [{
						name: 'large',
						width: 640
					}, {
						name: "large2",
						width: 1024,
						suffix: "_x2",
						quality: 60
					}]
				},
				files: [{
					expand: true,
					cwd: '<%= dir.dev %>/',
					src: ['**/<%= dir.images %>/**.{jpg,gif,png}'],
					dest: '<%= dir.dev %>/'
				}]
			}
		},
		watch: {

			"backEnd": {
			  files: ["<%= dir.source %>/?(resources|tests)/**/*"],
			  tasks: ["copy:backEnd"],
			  options: {"event": ["added","changed"]}
			},

			"public_PHP_HTML": {
				files: ["<%= dir.source %>/public/*.{php,html}"],
				tasks: ["copy:public_PHP_HTML"],
				options: { "event": ["added", "changed"] }
			},


			// "pureCSS": {
			//   files: ["<%= dir.source %>/public/**/*.css"],
			//   tasks: ["copy:pureCSS"],
			//   options: {
			//     "event": ["added", "changed"]
			//   }
			// },

			// "deletedCSS": {
			//   files: ["<%= dir.source %>/public/**/*.css"],
			//   tasks: ["copy:dev"],
			//   //  tasks : ["copy:pureCSS"],
			//   options: {
			//     "event": ["deleted"]
			//   }
			// },

			"deletedBackEnd" : {
				"files" : ["<%= dir.source %>/?(resources|tests)/**/*"],
				"tasks" : [
					"clean:backEnd",
					"copy:backEnd"
				],
				"options" : { "event": "deleted"}
			},

			"deleted_public_PHP_HTML": {
				files: ["<%= dir.source %>/public/*.{html,php}"],
				tasks: [
					"clean:public_PHP_HTML",
					"copy:public_PHP_HTML"
				],
				options: {"event": ["deleted"]}
			},
		}
	});
	// LOAD TASKS
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-responsive-images");
	grunt.loadNpmTasks("grunt-contrib-watch");


	grunt.registerTask("dev", [
		"clean:target",
		"copy",
		// "responsive_images",
		"watch"
	]);

	grunt.registerTask("deploy",[
	//   "clean:target",
	//   "copy",
	//   "responsive_images",
	//   "watch"
	]);

	grunt.registerTask("default", "dev");

};
