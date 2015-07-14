var gulp = require('gulp'),
    requirejs = require('requirejs'),
    wrench = require('wrench'),
    fs = require('fs'),
    COPYTO = './build/app/',
    COPYFROM = './app/';


gulp.task('requirejsBuild', function () {
    //copyProject();
    wrench.mkdirSyncRecursive('./build/bower_components/requirejs/', 0777);

    requirejs.optimize({
        baseUrl: './app/js',
        mainConfigFile: './app/js/config.js',
        out: "build/app/js/main.js",
        optimizeCss: "none",
        useStrict: true,
        name: 'main',
        findNestedDependencies: true
    }, function () {
        fs.createReadStream('index.html').pipe(fs.createWriteStream('./build/index.html'));
        fs.createReadStream('./bower_components/requirejs/require.js').pipe(fs.createWriteStream('./build/bower_components/requirejs/require.js'));
        console.log("DONE!!!!!!!!!!!!!!");
    });

});