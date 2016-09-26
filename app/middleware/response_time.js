'use strict';

// just for showcase, egg had a build-in middleware to export `x-readtime` header
// options 为同名的 config, 即 app.config.responseTime，也即：`config/config.default.js`里的responseTime配置
module.exports = (options, app) => {
    return function*(next) {
        const start = Date.now();

        yield next;

        // options is config.responseTime
        this.set(options.header, Date.now() - start);
    };
};
