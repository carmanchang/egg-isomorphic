'use strict';

module.exports = app => (
    /**
     * HackerNews Api Service
     */
    class HackerNews extends app.Service {
        constructor(ctx) {
            super(ctx);

            // 读取配置文件，默认读取的是`config/config.default.js`文件的内容
            this.config = this.ctx.app.config.news;
            this.serverUrl = this.config.serverUrl;
            this.pageSize = this.config.pageSize;
        }

        /**
         * request hacker-news api
         * @param {String} api - Api name
         * @param {Object} [opts] - urllib options
         * @return {Promise} response.data
         */
        * request(api, opts) {
            const options = Object.assign({
                dataType: 'json',
            }, opts);

            // 读取 hacker-news api 数据
            // 先请求列表
            const result = yield this.ctx.curl(`${this.serverUrl}/${api}`, options);
            return result.data;
        }

        /**
         * get top story ids
         * @param {Number} [page] - page number, 1-base
         * @param {Number} [pageSize] - page count
         * @return {Promise} id list
         */
        * getTopStories(page, pageSize) {
            page = page || 1;
            pageSize = pageSize || this.pageSize;

            const result = yield this.request('topstories.json', {
                data: {
                    orderBy: '"$key"',
                    startAt: `"${pageSize * (page - 1)}"`,
                    endAt: `"${pageSize * page - 1}"`,
                },
            });

            return Object.keys(result).map(key => result[key]);
        }

        /**
         * query item
         * @param {Number} id - itemId
         * @return {Promise} item info
         */
        * getItem(id) {
            return yield this.request(`item/${id}.json`);
        }

        /**
         * get user info
         * @param {Number} id - userId
         * @return {Promise} user info
         */
        * getUser(id) {
            return yield this.request(`user/${id}.json`);
        }
    }
);
