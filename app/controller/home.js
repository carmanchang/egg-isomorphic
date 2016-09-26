'use strict';

require('babel-register');

let microdata = {
    styleDomain: "//localhost:8080",
    styleVersion: '1.0.0'
};

const colors = require('colors');

console.log('Home controller'.red);

module.exports = function* homeController() {
    yield this.render('Home', {
        microdata: microdata,
        mydata: {
            nick: '这里是服务器渲染的~'
        }
    }, true);
};
