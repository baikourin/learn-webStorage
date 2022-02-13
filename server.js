const browserSync = require('browser-sync');
const fs = require('fs');
const path = require('path');

browserSync.init({
    files: './dist/**/*',
    port: 8080,
    server: {
        baseDir: './dist',
        middleware: [
            function (req, res, next) {
                res.setHeader('set-cookie', 'myname=serverCookie');
                console.log('cookie::::', req.headers.cookie)
                next();
            }
        ]
    }
})