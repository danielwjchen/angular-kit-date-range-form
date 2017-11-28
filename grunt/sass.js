'use strict';
module.exports = function(grunt) {
	grunt.config.set('sass', {
        compile: {
            files: {
                'dist/ng-kit.date-range-form.css': 'src/date-range-form.directive.scss',
            },
        },
        minify: {
            options: {
                style: 'compressed',
            },
            files: {
                'dist/ng-kit.date-range-form.min.css': 'src/date-range-form.directive.scss',
            },
        },
	});
    grunt.loadNpmTasks('grunt-contrib-sass');
};