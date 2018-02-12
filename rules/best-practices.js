module.exports = {
  rules: {
    // https://eslint.org/docs/rules/#best-practices
    "accessor-pairs": "off", // 在对象中强制执行getter / setter对d
    "array-callback-return": "warn", // 在数组方法的回调中强制返回语句
    "block-scoped-var": "off", // 将var作为块作用域
    "class-methods-use-this": "off", // 强制类的成员函数里包含this
    complexity: "off", // 限制逻辑负责性
    "consistent-return": "off", // 限制return必须有确定返回值
    curly: ["error", "multi-line"], // 为所有控制语句强制使用一致的括号样式 ==> if (foo) foo++;
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
    "no-else-return": "off", // else之前不允许返回
    "no-empty-function": "off", // 禁止空function
    "no-empty-pattern": "error", // 不允许空的解构模式
    "no-eq-null": "off", // 不允null比较
    "no-eval": "warn", // 不允使用eval
    "no-extend-native": "error", // 禁止扩展本地对象
    "no-extra-bind": "error", // 禁止不必要的function bind
    "no-extra-label": "warn", // 禁止不必要的标签
    "no-fallthrough": "error", // 禁止case语句的漏判
    "no-floating-decimal": "off", // 禁止浮点数简写 ==> var num = .5
    "no-global-assign": "warn", // 禁止给原生对象或者全局对象赋值
    "no-implicit-coercion": "off", // 不允许使用较短的符号进行类型转换
    "no-implicit-globals": "off", // 在全局范围内禁止变量和函数声明
    "no-implied-eval": "error", // 禁止隐式的eval  setTimeout('alert('Hi!');', 100);
    "no-invalid-this": "error", // 禁止在类或类对象之外使用this
    "no-iterator": "off", // 不允许迭代器
    "no-labels": "off", // 不允labels语法
    "no-lone-blocks": "off", // 禁止不必要的嵌套块
    "no-loop-func": "off", // 禁止循环中使用function
    "no-magic-numbers": "off", // 禁止魔术数字 “魔术数字”是代码中多次出现的数字，没有明确的含义。它们应该最好由命名常量替换
    "no-multi-spaces": "error", // 禁止多个空格
    "no-multi-str": "error", // 不允许多行字符串
    "no-new": "off", // 不允使用new不赋值 ==> new Person();   var person = new Person();
    "no-new-func": "off", // 不允使用new Function
    "no-new-wrappers": "error", // 不允new String/Number/Boolean
    "no-octal": "error", // 禁用八进制
    "no-octal-escape": "warn", // 禁止字符串文字中的八进制转义序列
    "no-param-reassign": "off", // 不允许重新分配函数参数
    "no-proto": "off", // 禁止使用__proto__
    "no-redeclare": "error", // 禁止重复定义
    "no-restricted-properties": "off", // 禁止某些对象属性
    "no-return-assign": "off", // 禁止返回一个赋值
    "no-return-await": "off", // 不允许不必要的返回await
    "no-script-url": "warn", // 禁止脚本URL ==> location.href = 'javascript:void(0)';
    "no-self-assign": "error", // 禁止自我赋值 ==> foo = foo;
    "no-self-compare": "off", // 禁止自我比较
    "no-sequences": "off", // 禁止使用逗号运算符
    "no-throw-literal": "error", // 限制可以抛出的异常
    "no-unmodified-loop-condition": "off", // 禁止未经修改的循环条件
    "no-unused-expressions": "off", // 禁止未被使用的表达式
    "no-unused-labels": "error", // 禁止未使用的label语句
    "no-useless-call": "off", // 禁止无效的call apply
    "no-useless-concat": "off", // 禁止不必要的字符串连接
    "no-useless-escape": "off", // 禁止不必要的字符串转义
    "no-useless-return": "off", // 禁止多余的返回语句
    "no-void": "warn", // 禁止void操作符
    "no-warning-comments": "off", // 禁止警告型注释
    "no-with": "error", // 禁用with
    "prefer-promise-reject-errors": "off", // 要求使用Error对象作为Promise拒绝的原因
    radix: "warn", // 要求使用基准参数 var num = parseInt('071', 10);
    "require-await": "off", //
    "vars-on-top": "off", // 变量声明放到作用域顶
    "wrap-iife": "off", // 使用IIFE包装
    yoda: "off" // 禁止Yoda风格 ==> if ( 42 == $value ) { /* ... */ }
  }
};
