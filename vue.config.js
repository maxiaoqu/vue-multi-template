const consoleInfo = require('./console');
const fs = require('fs');

// 获取当前环境变量
var projectName = process.argv[5] || process.argv[3];

// 生成目前运行的环境、状态
fs.open('./src/environment/nodeEnv.js', 'w', function (err, fd) {
    const buf = `export const nodeEnv = {
    projectName: '${projectName}',
    nodeEnv: '${process.env.NODE_ENV}',
    currentMode: '${process.env.VUE_APP_CURRENTMODE}',
    currentModeName: '${process.env.VUE_APP_CURRENTMODE}',
    currentModeChName: '${process.env.VUE_APP_CURRENTMODE}'
    requestMethod: 'axios'
};`;
    fs.write(fd, buf, 0, buf.length, 0);
});

module.exports = {
    publicPath: './',
    lintOnSave: process.env.NODE_ENV !== 'production',
    outputDir: process.env.outputDir,
    productionSourceMap: false,
    filenameHashing: false,
    devServer: {
        port: 1024,
        host: 'localhost',
        https: false,
        open: true
    }
}
