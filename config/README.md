## 配置文件存放目录

写业务的时候，不可避免的需要有配置文件，`egg`提供了强大的配置合并管理功能：

1. 支持按环境变量加载不同的配置文件，如 `config.local.js`, `config.prod.js`......;
2. 配置文件可以在应用/插件/框架等地方就近配置，egg 将合并加载;
3. 具体合并逻辑可参见 [Web规范](http://gitlab.alibaba-inc.com/node/team/blob/master/web.md)。
