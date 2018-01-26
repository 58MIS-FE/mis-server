let join = require('path').join
let fs = require('fs')
module.exports = static


//静态资源类型判断
function static(path,opts) {
    opts = opts || {};
    opts.rootPath = path;
    return function(ctx, next){
        if(ctx.path == '/') ctx.path = '/index.html'

        let filePath = join(opts.rootPath ,ctx.path);
        //判断路径是否存在
        let flagInfo = fs.existsSync(filePath);
        //是否为文件流
        let flag = fs.statSync(filePath).isFile()

        if(flag) {
            let index = filePath.lastIndexOf(".");
            let Type =  filePath.substring(index+1).toLocaleUpperCase();
            switch (Type) {
                case 'HTML':
                    ctx.res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    break;
                case 'JS':
                    ctx.res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
                    break;
                case 'CSS':
                    ctx.res.setHeader('Content-Type', 'text/css; charset=utf-8');
                    break;
                case 'PNG':
                    ctx.res.setHeader('Content-Type', 'image/png; charset=utf-8');
                    break;
                case 'JPG':
                    ctx.res.setHeader('Content-Type', 'image/jpeg; charset=utf-8');
                    break;
                case 'ICO':
                    ctx.res.setHeader('Content-Type', 'image/x-icon; charset=utf-8');
                    break;
                case 'PDF':
                    ctx.res.setHeader('Content-Type', 'application/pdf; charset=utf-8');
                    break;
                case 'TXT':
                    ctx.res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    break;
                default:
                    break;
            }
            ctx.body = fs.createReadStream(filePath)

        }else{
          next();
        }
    }
}
