const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create(); // подключаем browser sync

function server() {
    browserSync.init({
        proxy: "lukumbar.local"
    });

    watch("index.php").on('change', browserSync.reload);
}


exports.server = server;