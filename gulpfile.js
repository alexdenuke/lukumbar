const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create(); // подключаем browser sync

function server() {
    browserSync.init({
        proxy: "online-shop.local",
        // logConnections: false,
        // snippet: false,
        // reloadOnRestart: false,
        notify: false
    });

    watch("*.*").on('change', browserSync.reload);
    watch("*/*.*").on('change', browserSync.reload);


}


exports.server = server;