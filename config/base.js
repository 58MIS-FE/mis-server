/**
 * [exports node-serber服务通用配置]
 * @type {Object}
 */

const path = require('path');


module.exports  = {
  //端口号
  port : 3000,
  //静态资源路径
  buildRoot: path.resolve(__dirname, '../dist'),
  //ip地址
  ip:'10.252.55.70'

}
