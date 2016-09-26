## Controller 用于控制页面的展现逻辑，渲染页面或控制页面跳转等等

1. 每个 Controller 类都是一个文件，包含一个或多个符合 koa middleware 约定的 Generator 函数;
2. 需放置在 `app/controller` 目录下;
3. 每个 `app/controller/*.js` 文件，都会被自动加载到 `app.controller.*` 上;
4. 注意：下划线会转换为驼峰命名，如 `foo_bar` => `fooBar`。
