module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-collection');

  grunt.initConfig({
    cssmin: {
      my_target: {
        src: 'input.css',
        dest: 'output.min.css'
      }
    }
  });

  grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
    if (arguments.length === 0) {
      grunt.log.writeln(this.name + ", no args");
    } else {
      grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
    }
  });


  grunt.registerTask('default', [
    'cssmin'
  ]);

};
