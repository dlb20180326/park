## 环境部署

```bash
# 克隆项目至本地
git clone git@github.com:dlb20180326/park.git
cd park

# 安装依赖包
npm install

# 启动开发模式
npm run dev

# 生成静态文件发布至生产环境使用
npm run build
```

## UI 组件（VUX）

* 本项目使用[vux](https://vux.li)移动端 UI 组件库，[点击链接](https://vux.li)前往查看文档

## 开发配置

* 本地 API 代理，配置节点[proxyTable](config/index.js)，实现本地跨域请求接口信息

```js
// 配置参考
proxyTable: {
  '/api/': {
    changeOrigin: true,
        target: 'http://www.dlbdata.cn/',
        pathRewrite: {
          '^/api/': '/dangjian/'
        }
    }
},
```

## 规范参照

> 没有死板的规范，规范可以自行定制，  
> 只要简洁明了，有利于项目管理，有助于提高团队开发效率，就是好的规范

* 代码格式请参照项目代码，以及[.editorconfig](.editorconfig)的配置

* 目录参照
  * `assets`：资源目录
  * `components`：公共组件
  * `plugins`：第三方插件
  * `router`：路由配置
  * `store`：公共模块
  * `utils`：构建工具
  * `views`：功能页面

```bash
src
├── assets
│   ├── css
│   ├── fonts
│   └── img
├── components
├── plugins
├── router
│   ├── index.js
│   └── routes.js
├── store
│   ├── modules
│   │   └── user.js
│   └── index.js
├── utils
│   ├── axios.js
│   └── index.js
├── views
│   ├── activity
│   │   └── index.vue
│   ├── party
│   │   └── index.vue
│   ├── points
│   │   ├── evaluate.vue
│   │   └── index.vue
│   ├── index.vue
│   ├── layout.vue
│   └── login.vue
├── App.vue
└── main.js
```

* 接口请求参照

```js
Vue.http
  .post('puser/tologin', {
    name: name,
    password: password
  })
  .then(result => {
    commit('login', result.result);
    return result;
  });
```
