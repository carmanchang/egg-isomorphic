## 业务逻辑层

在实际应用中， `Controller` 一般不会自己生成数据，也不会包含复杂的逻辑，你应该将那些`复杂的过程`放到业务逻辑层 `Service`里面，然后暴露出一个简单的函数给 `Controller` 调用，这样也便于测试。

1. 同样，每一个 `Service` 类都是一个文件，需放置在 `app/service` 目录下;
2. 每个 `Service` 都会像 `Context` 一样，在每个请求生成的时候，被自动实例化到 `ctx.service.*` 下;
3. 注意：下划线会转换为驼峰命名，如 `foo_bar => fooBar`;
4. 注意：Service 不是单例。
