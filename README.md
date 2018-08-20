# wxFormater

##功能

在小程序中以正确的缩进和换行显示json

##使用方法

###项目中引入文件

- parser.js
- parser.wxml

###页面js文件中：

```
const parser = require('你的路径/parser/parser.js')
……
……
var that = this;
/***
*解析需要展示的对象，并设置到页面data中
*参数分别是： 当前页面data中的key, 解析类型，js对象，页面引用this
*/
parser.parse('state', 'json', state, that)
```

###页面wxml中：

```
<import src="你的路径/parser/parser.wxml"/>
……
……
//data都会放在parser中，所以这里是parser.state
<template is="jsonParse" data="{{data: parser.state}}"/>
```
