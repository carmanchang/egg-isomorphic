# exh-node

展会O2O2O前后端分离（页面直出）实现方案。

## 快速开始

`服务端启动：`
```shell
$ tnpm install
$ tnpm start
```

`前端启动：`
```shell
$ cd app/public/assets
$ tnpm install
$ tnpm build
$ tnpm start
```

`准备就绪，去浏览器查看：`
```shell
$ open http://localhost:7001/news
```

注意： egg 在开发期默认启动 `development` 插件，修改服务端代码后，会自动重启 worker 进程。

## egg使用问题及建议

Please open an issue [here](https://github.com/eggjs/egg/issues).

## 业界相关实践
1. [腾讯新闻React同构直出优化实践](http://www.alloyteam.com/2016/06/tencent-news-react-isomorphic-straight-out-optimization/)
2. [React同构实践与思考](https://segmentfault.com/a/1190000004671209)
3. [React Koa 同构实践](http://devdeeper.com/koa-react-server-side-render/)
4. [降低首屏时间，“直出”是个什么概念?](http://www.cnblogs.com/vajoy/p/5079943.html)
5. [【AlloyTeam优化系列】Node直出让你的网页秒开](http://www.alloyteam.com/2015/10/optimization-of-alloyteam-series-node-directly-transferring-your-web-pages-second-opening/)
6. [Node直出理论与实践总结](http://www.alloyteam.com/2016/07/node-straight-out/)
7. [趣店(原分期)前端团队基于koa.js的前后端分离实践](https://cnodejs.org/topic/57b062ed144011da12ff4183)
8. [(番外篇) 同构化的 React + Redux 服务端渲染](https://ruby-china.org/topics/29835)
9. [React+Redux同构应用开发](http://www.aliued.com/?p=3077)
10. [前后端分离与前端工程化](https://segmentfault.com/a/1190000006751300)

## 概念说明

| 概念           | 描述                                                               |
|:-------------:|:-------------------------------------------------------------------|
| Controller    | 逻辑更加简洁，专注 Web 页面的渲染                                       |
| Service       | 负责组装和格式化 Proxy 接口提供的数据，并封装业务逻辑，被多个 Controller 使用 |
| Proxy         | 从 Service 中细分出的数据层，专门负责跟后端获取数据。一般通过 [jar2proxy](http://gitlab.alibaba-inc.com/egg/jar2proxy) 动态生成。|

## egg插件编写

插件是 egg 的精髓之一，它其实就是一个 mini 应用，用于逻辑解耦，便于生态复用和差异化定制。

| 优点           | 描述                                                               |
|:-------------:|:-------------------------------------------------------------------|
| 共建生态        | 譬如 [egg-security](http://gitlab.alibaba-inc.com/egg/egg-security)，[egg-hsfclient](http://gitlab.alibaba-inc.com/egg/egg-hsfclient)这些插件，沉淀了很多企业级开发的经验，可以在应用中自由选择，一键引入，极大的方便了开发者。|
| 差异化定制      |譬如 view 插件，在 egg 里面只是定义了 view 的规范和接口，上层应用可以使用不同的插件， 如 [egg-view-nunjucks](http://gitlab.alibaba-inc.com/egg/egg-view-nunjucks), [egg-view-ejs](http://gitlab.alibaba-inc.com/egg/egg-view-ejs)来实现差异化定制。|
