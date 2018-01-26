# mis-server

## 简介

该项目为日常项目开发中启动服务的项目，项目中模拟了一些koa2的源码 编写了mis-koa 部分代码仍有问题 ,有兴趣者改进




### dev

``` shell
npm run dev

```


## 项目结构

```
.
├── README.md
├── mis-koa
│   ├── mis-bodyparser.js
│   ├── mis-compose.js
│   ├── mis-cookie.js
│   ├── mis-router.js
│   ├── mis-static.js
│   ├── mis.js
├── dist  --- (静态资源文件夹)
├── package.json
```




### dist编译后的项目结构

```
.
├── css
│   ├── index.3f05035e.css
│   ├── index.3f05035e.css.map
│   ├── page2.3f05035e.css
│   └── page2.3f05035e.css.map
├── js
│   ├── index.3f05035ea26e8a6c3eb8.js
│   ├── index.3f05035ea26e8a6c3eb8.js.gz
│   ├── index.3f05035ea26e8a6c3eb8.js.map
│   ├── page2.3f05035ea26e8a6c3eb8.js
│   └── page2.3f05035ea26e8a6c3eb8.js.map
├── static ()
│   ├── libs
│   │   └── js
│   │       ├── manifest_vendors.json
│   │       └── vendors.js
│   └── test.txt
├── index.html
└── page2.html
```


## 配置

脚手架的基本配置为 `config/base.js` 文件。修改配置文件将影响打包效果。

### 默认配置项

``` js
{
    //端口号
    port : 3000,
    //静态资源路径
    buildRoot: path.resolve(__dirname, '../dist'),
    //ip地址
    ip:'10.252.55.70'
}
```
