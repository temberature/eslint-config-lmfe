module.exports = {
  env: {
    node: true
  },
  rules: {
    "callback-return": "off", // return一个回调函数
    "global-require": "off", // 全局的require
    "handle-callback-err": "off", // 需要在回调中进行错误处理
    "no-buffer-constructor": "warn", // 不允许使用Buffer（）构造函数
    "no-mixed-requires": ["off", false], // 不允许require调用与变量声明混合使用
    "no-new-require": "off", // require不能被new出来
    "no-path-concat": "off", // 在使用__dirname和__filename时禁止字符串连接
    "no-process-env": "off", // 禁用process.env
    "no-process-exit": "off", // 禁用process.exit()
    "no-restricted-modules": "off", // 被禁用的Node.js模块
    "no-sync": "off" // 禁止同步方法
  }
};
