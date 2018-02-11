const restrictedGlobals = [
  "addEventListener",
  "blur",
  "close",
  "closed",
  "confirm",
  "defaultStatus",
  "event",
  "external",
  "defaultstatus",
  "find",
  "focus",
  "frameElement",
  "frames",
  "history",
  "innerHeight",
  "innerWidth",
  "length",
  "location",
  "locationbar",
  "menubar",
  "moveBy",
  "moveTo",
  "name",
  "onblur",
  "onerror",
  "onfocus",
  "onload",
  "onresize",
  "onunload",
  "open",
  "opener",
  "opera",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "print",
  "removeEventListener",
  "resizeBy",
  "resizeTo",
  "screen",
  "screenLeft",
  "screenTop",
  "screenX",
  "screenY",
  "scroll",
  "scrollbars",
  "scrollBy",
  "scrollTo",
  "scrollX",
  "scrollY",
  "self",
  "status",
  "statusbar",
  "stop",
  "toolbar",
  "top"
];

module.exports = {
  rules: {
    // https://eslint.org/docs/rules/#variables
    "init-declarations": ["off", "always"], // 定义变量是否需要初始化
    "no-catch-shadow": "warn", // 禁止覆盖catch的变量
    "no-delete-var": "warn", // 禁止delete
    "no-label-var": "warn", // 不允许使用label语法变量
    "no-restricted-globals": ["warn"].concat(restrictedGlobals), // 禁用的全局变量定义
    "no-shadow": "warn", // 禁止变量声明覆盖
    "no-shadow-restricted-names": "warn", // 不允许覆盖关键字
    "no-undef": "warn", // 禁止未声明的变量
    "no-undef-init": "warn", // 不允许初始化为undefined
    "no-undefined": "off", // 禁止使用undefined
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true
      }
    ], // 未使用的变量
    "no-use-before-define": [
      "warn",
      {
        functions: true,
        classes: true,
        variables: true
      }
    ]
  }
};
