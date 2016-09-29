module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            build: {
                files: [{
                    src: 'client/index.html',
                    dest: 'dist/client/index.html'
                }, {
                    src: 'client/config.js',
                    dest: 'dist/client/config.js'
                }, {
                    src: 'client/jspm_packages/system.js',
                    dest: 'dist/client/jspm_packages/system.js'
                },{
                    src: 'client/jspm_packages/github/twbs/bootstrap@3.3.7/css/bootstrap.min.css',
                    dest: 'dist/client/jspm_packages/github/twbs/bootstrap@3.3.7/css/bootstrap.min.css'
                }]
            }
        },
        systemjs: {
            options: {
                sfx: false,
                baseURL: 'client',
                configFile: "./dist/client/config.js",
                minify: true,
                build: {
                    mangle: false
                }
            },
            build: {
                files: [{
                    src: "./client/js/main.js",
                    dest: "./dist/client/js/main.js"
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-systemjs-builder');

    grunt.registerTask('build', [
        'copy:build',
        'systemjs:build'
    ]);
};