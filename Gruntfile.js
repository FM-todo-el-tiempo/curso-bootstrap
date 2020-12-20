module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            files: ['css/*.scss'],
            tasks: ['css']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '*.html',
                        'css/*.css',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand:true,
                    cwd:'./',
                    src:'img/*.{png,jpeg,jpg,gif}',
                    dest:'dist/',
                }]
            }
        },

        copy: {
            html: {
                files: [{
                    expand:true,
                    dot: true,
                    cwd:'./',
                    src:['*.html'],
                    dest:'dist',
                }]
            }
        },

        clean: {
            build: {
                src: ['dist/']
            }
        },

        cssmin: {
            dist:{}
        },

        uglify: {
            dist: {}
        },

        filerev: {
            options: {
                encoding: 'utg8',
                algorithm: 'md5',
                length: 20
            },

            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css',
                    ]
                }]
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },

        useminPrepare: {
            foo: {
                dest:'dist',
                src: ['index.html', 'contacto.html', 'valores.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function(context, block){
                                var generated = context.options.generated:
                                generated.options = {
                                    keepSpecialComments: 0,
                                    rebase: false
                                }
                            }
                        }]
                    }
                }
            }
        },

        usemin: {
            html: ['dist/index.html', 'dist/contacto.html', 'dist/valores.html'],
            options: {
                assetsDir: ['dist', 'dist/css', 'dist/js']
            }
        }
    });

    grunt.registerTasks('css',['sass']);
    grunt.registerTasks('default',['browserSync','watch']);
    grunt.registerTasks('img:compress',['imagemin']);
    grunt.registerTasks('build',[
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ]);
}