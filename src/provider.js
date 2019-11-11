let miniprogramBar = {};

module.exports.initBar = function(defAttrs, options) {
  miniprogramBar.defAttrs = defAttrs;
  miniprogramBar.options = options;
  miniprogramBar.mountedInstances = {};
};

module.exports.getShareContent = function(context) {
  const webviewId = context.__wxWebviewId__;
  const { mountedInstances, options } = miniprogramBar;
  const { shareContentGetter } = options;
  const instance = mountedInstances[webviewId];
  const currentShareContent = instance.data.shareContent;

  if (shareContentGetter) {
    return shareContentGetter(currentShareContent);
  }
  return currentShareContent;
};

module.exports.miniprogramBar = miniprogramBar;
