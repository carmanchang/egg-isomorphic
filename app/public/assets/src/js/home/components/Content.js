/**!
 * exh-node - /app/public/assets/src/js/home/components/Component.js
 * 内容组件
 *
 * Authors:
 *   怿航 <xiangzhong.wxz@alibaba-inc.com>
 */

'use strict';
import React, { Component, PropTypes } from 'react';

class Content extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object
  };

  render() {
    let { microdata, mydata } = this.props;
    return (
      <div>hello：{mydata.nick}</div>
    );
  }
}

export default Content;
