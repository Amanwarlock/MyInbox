"use strict;"

var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var proxyMiddleware = require("http-proxy-middleware");
var config = require("./config.json");
const port = config.port ? config.port : 7000;

gulp.task('serve', function () {
    //https://browsersync.io/docs/options
    browserSync.init({
        port: port,
        server: {
            startPath: "/",
            baseDir: "./src",
            routes: {
                "/bower_components": "bower_components",
                "/node_modules": "node_modules",
                "/socket.io": "socket.io"
            },
            middleware: proxyMiddleware("/api", { target: config.proxy, changeOrigin: true }),
            // proxy: config.proxy
        },
        socket: {
            namespace: "/mySocket.io",
            // domain : config.domain //"localhost:9000"
        },
        cors: true
    });

    gulp.watch(["src/*.html"]).on('change', browserSync.reload);
    gulp.watch("src/*.js").on('change', browserSync.reload);

   /*  gulp.watch(["src/*.html" , "src/*.js"],function(event){
        browserSync.reload(event.path);
    }); */

    /*
        In case of gulp enospec error occurs run this command in linux = echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
        - THis error occurs due to the number of files being watched
        - reference:
            -   https://github.com/gulpjs/gulp/issues/217 
     */
});