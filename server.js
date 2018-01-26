let CONFIG = require('./config/base.js')
let Mis = require('./mis-koa/mis')
let static = require('./mis-koa/mis-static')
let bodyparser = require('./mis-koa/mis-bodyparser')
let cookies = require('./mis-koa/mis-cookie')
let mis = new Mis();
  //判断ip是否存在
CONFIG.ip == '' ? CONFIG.ip = 'localhost' : ''

mis.use(static(CONFIG.buildRoot));
mis.use(bodyparser())
mis.use(cookies())


//打开浏览器
let child_process = require('child_process'),
url = `http://${CONFIG.ip}:${CONFIG.port}`;

if (process.platform == 'wind32') {
  cmd = 'start "%ProgramFiles%\Internet Explorer\iexplore.exe"';
} else if (process.platform == 'linux') {
  cmd = 'xdg-open';
} else if (process.platform == 'darwin') {
  cmd = 'open';
}
child_process.exec(`${cmd} "${url}"`);




mis.listen(CONFIG.port, () => {
  console.log(`Server running at http://${CONFIG.ip}:${CONFIG.port}' ${CONFIG.port} is port`)
})
