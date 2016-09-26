'use strict';

// egg 内置了 static 插件，但默认未开启，线上环境建议部署到 CDN，无需该插件。
exports.static = true;

// 指定 view 插件，如果要更换模板引擎可在此处更改
exports.view = {
    enable: true,
    package: '@ali/egg-view-react'
};
