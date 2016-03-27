# NOTE of Vue

## 20160128
  0. 写在视图里的组件名必须连字符形式的小写命名，自动对应驼峰形式js组件名。(import listView from './list-view' => <list-view></list-view>)

## 20160130
  1. 看来vue文件sass变量作用域只局限在当前style，包括@import。设想仅在root文件引入变量文件即可的方案不可行。

## 20160203
  0. 项目组成: 
    html文件容器,
    主应用js,
    根视图vue,
    路由表js,
    配置js,
    数据层,
    服务,
    过滤器,
    视图,
    组件,
    资源(样式,图片,font等)

  1. 单一职责
    组件: 接受props,渲染自身
    视图: 获取数据，传递给各个组件，并拼装组件
    store层: 数据层，暴露数据接口，数据有可能是请求来的，有可能是缓存
    service层: 提供常用的服务，例如http, util, localStorage等
    以上方法组织项目，可以最大化复用，思路清晰，小而美

