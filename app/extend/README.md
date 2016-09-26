## 编写扩展

扩展脚本功能，以便在模板中使用。egg 提供了一种快速扩展脚本的方法，在 app/extend 目录下提供扩展脚本即可。

如做了如下扩展：
```javascript
// app/extend/filter.js
const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
```

则可以在模板里这样使用：
```javascript
<!-- app/views/news/list.tpl -->
{{ filter.relativeTime(item.time) }}
```
