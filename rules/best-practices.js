module.exports = {
  rules: {
    // https://eslint.org/docs/rules/#best-practices
    "accessor-pairs": "off", // 在对象中强制执行getter / setter对d
    "array-callback-return": "warn", // 在数组方法的回调中强制返回语句
    "block-scoped-var": "off", // 将var作为块作用域
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: []
      }
    ],
    complexity: "off", // 限制逻辑负责性
    "consistent-return": "off", // 限制return必须有确定返回值
    curly: ["warn", "multi-line"], // 限制语句必须有花括号 ==> if (foo) foo++;
    "default-case": [
      "warn",
      {
        commentPattern: "^no default$"
      }
    ], // 限制switch必须有default 除非使用注释// no default
    "dot-location": ["warn", "property"], // 点之后强制换行
    "dot-notation": "off", // 强制使用.访问 []会报错
    eqeqeq: ["warn", "always", { null: "ignore" }], // 强制使用=== 和 !==
    "guard-for-in": "warn", // 使用Object.prototype.hasOwnProperty.call(foo, key)保护 for in
    "no-alert": "warn", // alert, confirm, and prompt不允许使用
    "no-caller": "warn", // 不允许使用caller/callee
    "no-case-declarations": "off", // 在case / default子句中不允许使用词法声明
    "no-div-regex": "off", // else之前不允许返回
    "no-else-return": ["error", { allowElseIf: false }], // else之前不允许返回
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"]
      }
    ], // 禁止空function
    "no-empty-pattern": "warn", // 不允许空的解构模式
    "no-eq-null": "off", // 不允null比较
    "no-eval": "error", // 不允使用eval
    "no-extend-native": "warn", // 禁止扩展本地对象
    "no-extra-bind": "warn", // 禁止不必要的function bind
    "no-extra-label": "warn", // 禁止不必要的标签
    "no-fallthrough": "warn", // 禁止case语句的漏判
    "no-floating-decimal": "warn", // 禁止浮点数简写 ==> var num = .5
    "no-global-assign": "warn", // 禁止给原生对象或者全局对象赋值
    "no-implicit-coercion": "off", // 禁止给原生对象或者全局对象赋值
    "no-implicit-globals": "warn", // 在全局范围内禁止变量和函数声明
    "no-implied-eval": "error", // 禁止隐式的eval  setTimeout('alert('Hi!');', 100);
    "no-invalid-this": "warn", // 禁止在类或类对象之外使用this
    "no-iterator": "warn", // 不允许迭代器
    "no-labels": [
      "warn",
      {
        allowLoop: false,
        allowSwitch: false
      }
    ], // 不允labels语法
    "no-lone-blocks": "warn", // 禁止不必要的嵌套块
    "no-loop-func": "warn", // 禁止循环中使用function
    "no-magic-numbers": "off", // 禁止魔术数字 “魔术数字”是代码中多次出现的数字，没有明确的含义。它们应该最好由命名常量替换
    "no-multi-spaces": "warn", // 禁止多个空格
    "no-multi-str": "warn", // 不允许多行字符串
    "no-new": "warn", // 不允使用new不赋值 ==> new Person();   var person = new Person();
    "no-new-func": "warn", // 不允使用new Function
    "no-new-wrappers": "warn",
    "no-octal": "warn", // 禁用八进制
    "no-octal-escape": "warn", // 禁止字符串文字中的八进制转义序列
    "no-param-reassign": "off", // 不允许重新分配函数参数
    "no-proto": "warn", // 禁止使用__proto__
    "no-redeclare": "warn", // 禁止重复定义
    "no-restricted-properties": "off", // 禁止某些对象属性
    "no-return-assign": ["warn", "always"], // 禁止返回一个赋值
    "no-return-await": "warn", // 不允许不必要的返回await
    "no-script-url": "error", // 禁止脚本URL ==> location.href = 'javascript:void(0)';
    "no-self-assign": "warn", // 禁止自我赋值 ==> foo = foo;
    "no-self-compare": "warn", // 禁止自我比较
    "no-sequences": "warn", // 禁止使用逗号运算符
    "no-throw-literal": "warn", // 限制可以抛出的异常
    "no-unmodified-loop-condition": "off", // 禁止未经修改的循环条件
    "no-unused-expressions": "off", // 禁止未被使用的表达式
    "no-unused-labels": "error", // 禁止未使用的label语句
    "no-useless-call": "warn", // 禁止无效的call apply
    "no-useless-concat": "warn", // 禁止不必要的字符串连接
    "no-useless-escape": "warn", // 禁止不必要的字符串转义
    "no-useless-return": "warn", // 禁止多余的返回语句
    "no-void": "warn", // 禁止void操作符
    "no-warning-comments": "off", // 禁止警告型注释
    "no-with": "warn", // 禁用with
    "prefer-promise-reject-errors": "off", // 要求使用Error对象作为Promise拒绝的原因
    radix: "warn", // 要求使用基准参数 var num = parseInt('071', 10);
    "require-await": "off", //
    "vars-on-top": "off", // 变量声明放到作用域顶
    "wrap-iife": ["warn", "outside", { functionPrototypeMethods: false }], // 使用IIFE包装
    yoda: "warn" // 禁止Yoda风格 ==> if ( 42 == $value ) { /* ... */ }
  }
};
