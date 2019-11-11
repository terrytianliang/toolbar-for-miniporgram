const { miniprogramBar } = require("./provider");

Component({
  properties: {
    title: {
      type: String,
      value: "",
      observer: "propChange"
    },
    navbarColor: {
      type: String,
      value: ""
    },
    bgColor: {
      type: String,
      value: ""
    },
    backgroundTextStyle: {
      type: String,
      value: ""
    },
    shareContent: {
      type: Object,
      value: null
    }
  },
  lifetimes: {
    attached() {
      const { mountedInstances } = miniprogramBar;
      const webviewId = this.__wxWebviewId__;
      if (!mountedInstances[webviewId]) {
        mountedInstances[webviewId] = this;
      }
    },
    ready() {
      this.componentReady = true;
      this.emitChange();
    },
    detached() {
      const webviewId = this.__wxWebviewId__;
      const { mountedInstances } = miniprogramBar;
      if (mountedInstances[webviewId]) {
        delete mountedInstances[webviewId];
      }
      this.componentReady = false;
    }
  },
  methods: {
    propChange() {
      if (this.componentReady) {
        this.emitChange();
      }
    },
    emitChange() {
      const attrs = this.getMountedAttrs();

      const { title, navbarColor, bgColor, backgroundTextStyle } = attrs;

      const navcolors = (navbarColor + "").split(" ");
      const navigationBarBackgroundColor = navcolors[0] || "";
      const frontColor = navcolors[1] || "";
      const backgroundColors = (bgColor + "").split(" ");
      const [
        backgroundColor,
        backgroundColorTop,
        backgroundColorBottom
      ] = backgroundColors;

      wx.setNavigationBarTitle({
        title: title
      });
      if (navcolors[0] && navcolors[1]) {
        wx.setNavigationBarColor({
          backgroundColor: navigationBarBackgroundColor,
          frontColor
        });
      }
      if (backgroundColor) {
        wx.setBackgroundColor({
          backgroundColor
        });
      }
      if (backgroundColorTop) {
        wx.setBackgroundColor({
          backgroundColorTop
        });
      }
      if (backgroundColorBottom) {
        wx.setBackgroundColor({
          backgroundColorBottom
        });
      }
      if (backgroundTextStyle) {
        wx.setBackgroundTextStyle({
          textStyle: backgroundTextStyle
        });
      }
    },
    getMountedAttrs() {
      const webviewId = this.__wxWebviewId__;
      const { defAttrs, mountedInstances } = miniprogramBar;

      let attrs = {};
      const instance = mountedInstances[webviewId];
      if (!instance) {
        return attrs;
      }

      const {
        title,
        navbarColor,
        bgColor,
        backgroundTextStyle
      } = instance.data;

      attrs.title = title || defAttrs.title;
      attrs.navbarColor = navbarColor || defAttrs.navbarColor;
      attrs.bgColor = bgColor || defAttrs.bgColor;
      attrs.backgroundTextStyle =
        backgroundTextStyle || defAttrs.backgroundTextStyle;

      return attrs;
    }
  }
});
