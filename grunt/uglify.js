'use strict';
module.exports = function(grunt, configs) {
	grunt.config.set('uglify', {
        options : {
            mangle: false, // changes function and variable names
            compress: true,
            preserveComments: false,
            sourceMap: true,
        },
        my_target: {
            files : {
                'dist/ng-kit.date-range-form.min.js': [
                    'dist/ng-kit.date-range-form.templates.js',
                    'src/date-range-form.js',
                    'src/date-range-form.directive.js',
                ],
            }
        },
	});
    grunt.loadNpmTasks('grunt-contrib-uglify');
};