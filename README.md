# demo1
学习记录react中各个细节的使用
1,使用脚手架工具进行项目创建
https://blog.csdn.net/daxiazouyizou/article/details/79743832
2，组价事件绑定，map循环输出组件
3，"react-router-dom": "^4.3.1",路由使用 注意和以前的路由3 “react-router”使用不同
https://segmentfault.com/a/1190000010174260
4，css的使用
https://blog.csdn.net/daxiazouyizou/article/details/79758558
5，高阶组件的使用，包裹echarts图形组件，
https://blog.csdn.net/cqm1994617/article/details/54800360
6，react项目引入装饰器
     首先yarn eject，打开webpack的显示配置，在package.json文件中查看
    然后：yarn add  babel-plugin-transform-decorators-legacy --save-dev
    最后package.json修改：
"babel": {
  "plugins": [
    "transform-decorators-legacy"
  ],
  "presets": [
    "react-app"
  ]
},
7，高阶函数，使用装饰器去修饰一个组件
8， scss在react项目中引用
https://blog.csdn.net/oYuLian/article/details/81206146
9，使用rem来使项目自适应
引入rem.js 和 rem.scss
10，使用fetch获取公共天气接口数据，注意跨域代理的使用，在package,json文件中配置