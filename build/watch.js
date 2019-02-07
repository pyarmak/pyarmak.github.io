var path = require("path");
var childProcess = require("child_process");
var chokidar = require('chokidar');
var fileConf = require('./files.conf.js');
var CSSJSfiles = fileConf.CSSJSfiles;

var list = [];
for (let i = 0; i < CSSJSfiles.length; i++) {
  list = list.concat(CSSJSfiles[i].list);
}

var watcher = chokidar.watch(list, {ignored: /(^|[\/\\])\../})
    .on('ready', () => {
        let build = () => {
            let cp = childProcess.fork(path.join(__dirname, "build.js"));
            cp.on("exit", function (code, signal) {
                console.log('Finished building');
            });
            cp.on("error", console.error.bind(console));
        };
        console.log('Initial scan complete. Running initial build then watching for changes.');
        build();
        watcher.on('all', (e, p) => { build(); });
    });
