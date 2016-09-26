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

## 相关文档

1. [egg文档](http://egg.alibaba-inc.com)
2. [egg API文档](http://egg.alibaba-inc.com/api/index.html)
3. [egg项目gitlab地址](http://gitlab.alibaba-inc.com/groups/egg)
4. [Egg QuickStart - 阿里企业级 Web 基础框架](http://www.atatech.org/articles/50126)
5. [web开发规范](http://gitlab.alibaba-inc.com/node/team/blob/master/web.md)
6. [接入alinode监控](http://chair.alibaba-inc.com/manual/alinode)
7. [模板引擎：egg-view-nunjucks](http://gitlab.alibaba-inc.com/egg/egg-view-nunjucks)
8. [模板引擎：egg-view-ejs](http://gitlab.alibaba-inc.com/egg/egg-view-ejs)
9. [模板引擎：egg-view-react](http://gitlab.alibaba-inc.com/egg/egg-view-react)
10. [Node应用从申请到部署上线全流程总结](http://www.atatech.org/articles/46778?flag_data_from=tpp&pvid=feffbc12-b1aa-42d9-be63-6a845355ef31)
11. [可能是目前最好的Node.js中文API文档](http://wiki.jikexueyuan.com/project/nodejs/)
12. [egg进程启动(基于Node.js cluster模块)科普](http://www.atatech.org/articles/41493#comment)
13. [基于egg开发的chair框架的开发文档](http://chair.alibaba-inc.com/documentation/)

## 业界相关实践
1. [代驾 node 直出改造方案](http://www.atatech.org/articles/38683)
2. [代驾一期 node 直出改造尝试遇到的一些问题](http://www.atatech.org/articles/38684)
3. [通过midway来直出移动端页面提升性能](http://www.atatech.org/article/detail/34440/0?rnd=168077786&rnd=499718568)
4. [腾讯新闻React同构直出优化实践](http://www.alloyteam.com/2016/06/tencent-news-react-isomorphic-straight-out-optimization/)
5. [React同构实践与思考](https://segmentfault.com/a/1190000004671209)
6. [React Koa 同构实践](http://devdeeper.com/koa-react-server-side-render/)
7. [降低首屏时间，“直出”是个什么概念?](http://www.cnblogs.com/vajoy/p/5079943.html)
8. [【AlloyTeam优化系列】Node直出让你的网页秒开](http://www.alloyteam.com/2015/10/optimization-of-alloyteam-series-node-directly-transferring-your-web-pages-second-opening/)
9. [Node直出理论与实践总结](http://www.alloyteam.com/2016/07/node-straight-out/)
10. [趣店(原分期)前端团队基于koa.js的前后端分离实践](https://cnodejs.org/topic/57b062ed144011da12ff4183)
11. [(番外篇) 同构化的 React + Redux 服务端渲染](https://ruby-china.org/topics/29835)
12. [React+Redux同构应用开发](http://www.aliued.com/?p=3077)
13. [前后端分离与前端工程化](https://segmentfault.com/a/1190000006751300)

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
