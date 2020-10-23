# Taro React TypeScript DVA MOCK 脚手架说明

> **声明：**
> 
> 本脚手架不提供任何形式的担保及保证。但作者会努力完善并提供适当的技术支持。
> 
> 来去自由，欢迎Star

## 适合人员

一切喜欢及想快速实现前端开发的人员，可以从零开始，附录有相关内容连接，

可边学边了解，我敢保证这几乎是最简洁全面的Taro+React+Ts+DVA脚手架。

当前版本 3.0.14(与taro 版本保持一致)

## 特色

1. 统一全面的跨端支持（微信/京东/百度/支付宝/字节跳动/QQ/H5/RN(React Native) ） 
2. Taro3升级后支持React/Vue 等框架，具体参考[小程序跨框架的开发与实践](https://mp.weixin.qq.com/s?__biz=MzU3NDkzMTI3MA==&mid=2247483770&idx=1&sn=ba2cdea5256e1c4e7bb513aa4c837834)
3. 本脚手架直接改造集成[DVA(仅core)](https://dvajs.com/guide/)，及[MOCK(开发时)](http://mockjs.com/)前端开发者仅需关注界面及逻辑本身
4. 采用更加严格高效的[TypeScript语言](https://typescript.bootcss.com/)，支持模版生成，同时集成[iconfont图标库](https://www.iconfont.cn/)
5. 其它诸多特色等待你探索并欢迎加入开发维护

## 安装运行

1. [安装Taro3.*全局安装](https://nervjs.github.io/taro/docs/GETTING-STARTED)
 ```
    npm install -g @tarojs/cli@3.0.14
    // 或
    yarn global add @tarojs/cli
 ```
2. 下载代码并安装依赖
 ```
    git clone https://github.com/gegeliu/taro-kit-dva-ts
    # 安装依赖
    cd taro-kit-dva-ts
    npm i
```
3. 编译及预览（小程序时需要在对应开发工具中打开）
```
    # h5 版本
     npm run dev:h5
    # 微信小程序
     npm run dev:weapp 
    # 百度小程序
     npm run dev:swan 
    # 其它查看 package.json
```

## 其它命令
```
    # 命令行快速生成模板页面
    ## 函数模版生成
       npm run tpl 'page-name'
    ## 组件模版生成
       npm run tpl 'page-name' -- com

    # 从iconfont更新图标
        npm run icon 'iconfont下载链接后缀'
        如：
        npm run icon 'font_1737876_xmxwz3kink'
```

持续优化及维持最新依赖更新...

## 本地安装检查

 .\node_modules\.bin\taro info
 
## 项目依赖升级

cd taro-kit-dva-ts

taro update project

## 如何更新所有依赖

npm install -g npm-check-updates

npm-check-updates -u

npm install

## 业务介绍

目录结构

    ├── @types                 // ts类型定义路径
    ├── dist                   // 编译结果目录
    ├── config                 // Taro配置目录
    │   ├── dev.js             // 开发时配置
    │   ├── index.js           // 默认配置
    │   └── prod.js            // 打包时配置
    ├── docs                   // 文档路径
    ├── mock                   // mock内容路径
    ├── src                    // 源码目录
    │   ├── components         // 组件
    │   ├── images             // 图片文件
    │   ├── models             // redux models
    │   ├── pages              // 页面文件目录
    │   │   └── index          // 首页继承Component模式
    │   │       ├── index.config.tsx  // 页面配置
    │   │       ├── index.tsx         // 页面逻辑
    │   │       ├── index.scss        // 页面样式
    │   │       ├── model.ts          // 页面models
    │   │       └── service.ts        // 页面api
    |   |   └── pop            // hook 函数页面y
    │   │       ├── index.config.tsx  // 页面配置
    │   │       ├── index.tsx         // 页面逻辑
    │   │       ├── index.scss        // 页面样式
    │   ├── services           // 公用抽象服务端强求接口 
    │   ├── styles             // 样式文件
    │   ├── utils              // 常用工具类
    │   ├── app.config.ts      // 入口配置文件
    │   ├── app.tsx            // 入口文件
    │   └── index.html
    ├── package.json
    ├── template.js            // pages模版快速生成脚本,执行命令 npm run tpl `文件名`
    └── get-iconfont.js        // iconfont快速更新,执行命令 npm run iconfont 

## 参考

### Taro开发文档

> https://nervjs.github.io/taro/docs/README.html

> [Taro 更新日志](https://github.com/NervJS/taro/blob/2.x/CHANGELOG.md)

### dva开发文档地址

> https://dvajs.com/

### TypeScript 中文手册

> https://typescript.bootcss.com/

### 小程序开发文档

> https://mp.weixin.qq.com/debug/wxadoc/dev/
>
> https://smartprogram.baidu.com/docs/develop/fuctionlist/list/

### 百度小程序配置
> https://smartprogram.baidu.com/docs/develop/devtools/editor_set/

## 项目代码
[github](https://github.com/gegeliu/taro-kit-dva-ts)

## License

[MIT](LICENSE)
