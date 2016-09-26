'use strict';

// 通过 app/router.js 来配置路由映射，相关API可以参考 [koa-router](https://github.com/alexmingoia/koa-router) 模块。

module.exports = app => {
    app.get('/home', app.controller.home);

    app.redirect('/', '/home');
};
