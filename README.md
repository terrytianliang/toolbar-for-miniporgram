# toolbar-for-miniprogram

toolbar for miniprogram wechat

# Installation

npm install --save toolbar-for-miniprogram

# Usage

app.js

```
const { initBar } = require("toolbar-for-miniprogram/provider");
const defaultAttrs = {
  title: "标题",
  backgroundTextStyle: "dark"
};

App({
  onLaunch: function() {
    initBar(defaultAttrs, { shareContentGetter });
  }
});

function shareContentGetter(shareContent) {
  shareContent = shareContent || {};
  const defShareDict = {
    title: "分享标题",
    path: "分享路径",
    imageUrl: "分享图"
  };
  const shareDict = {
    title: shareContent.title || defShareDict.title,
    path: shareContent.path || defShareDict.path,
    imageUrl: shareContent.imageUrl || defShareDict.imageUrl
  };
  return shareDict;
}
```

app.json

```
"usingComponents": {
    "toolbar": "toolbar-for-miniprogram"
  },
```

wxml 文件中使用

```
 <toolbar title="{{title}}" shareContent="{{shareContent}}" />

```

# Properties

## title

设置当前页面的标题

## navbarColor

设置页面的导航条颜色
格式 "#ffffff #000000" 两个颜色之间用空格隔开
第一个表示(backgroundColor)背景颜色值，有效值为十六进制颜色
第二个表示(frontColor)前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000

## bgColor

设置窗口的背景色
格式 "#ffffff #ffffff #ffffff" 三个颜色之间使用空格隔开
第一个表示 backgroundColor(窗口的背景色，必须为十六进制颜色值)
第二个表示 backgroundColorTop(顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持)
第三个表示 backgroundColorBottom(底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持)

## backgroundTextStyle

设置下拉背景字体、loading 图的样式 目前仅支持 dark、light

## shareContent

页面发起转发时的内容

```
 const shareContent = {
    title: "分享标题",
    path: "需要分享的页面路径",
    imageUrl: "分享图"
  };
```
