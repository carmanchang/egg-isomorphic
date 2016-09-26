'use strict';

// 默认配置

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
    const exports = {};

    // organization your app middlewares
    exports.middleware = [
        'responseTime',
    ];

    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
    };

    // config for middleware / plugin
    exports.responseTime = {
        header: 'x-response-time',
    };

    exports.news = {
        pageSize: 30,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

    const viewpath = path.join(__dirname, '../app/view');

    console.log('viewpath:', viewpath);

    exports.view = {
        extname: 'js', // 选填，文件后缀
        beautify: false, // 选填，是否格式化 HTML
        cache: false, // 选填，是否开启缓存，默认为false
        cacheOptions: {

        }, // 选填，缓存配置，参照(https://github.com/isaacs/node-lru-cache#options)， 默认配置参照(https://github.com/isaacs/node-lru-cache#usage)
        loadpath: viewpath, // 选填，View 本地文件路径
        internals: false, // 选填，选择 renderToString 或 renderToStaticMarkup
        doctype: '<!DOCTYPE html>' // 选填，DOC 头
    };

    return exports;
};
