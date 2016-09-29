module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            preBuild: ['dist/*'],
            postBuild: ['.tmp'],
        },
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
        },
        useminPrepare: {
            options: {
                dest: 'dist/client'
            },
            html: 'client/index.html'
        },
        usemin: {
            html: 'dist/client/index.html'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-systemjs-builder');

    grunt.registerTask('build', [
        'clean:preBuild',
        'copy:build',
        'systemjs:build',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'usemin',
        'clean:postBuild'
    ]);
};