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
