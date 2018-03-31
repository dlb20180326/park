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

## 目录规范参照

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
