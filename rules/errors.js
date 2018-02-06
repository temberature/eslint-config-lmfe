module.exports = {
  rules: {
    // 定义审查规则 https://eslint.org/docs/rules/
    // https://eslint.org/docs/rules/#possible-errors
    "for-direction": "error", // 强制for循环方向正确
    "getter-return": ["error", { allowImplicit: true }], // 强制get返回
    "no-await-in-loop": "error", // 循环中禁用await
    "no-compare-neg-zero": "error", // 禁用-0 ==> if(-0)
    "no-cond-assign": ["warn", "always"], // 条件判断中赋值 ==> if(a=1)
    "no-console": "warn", // 调用console输出信息() 发布中需要设置为'warn'
    "no-constant-condition": "warn", // 条件判断中的常量 ==> if(true)
    "no-control-regex": "warn", // 控制正则表达式字符
    "no-debugger": "warn", // debugger断点 发布中需要设置为'warn'
    "no-dupe-args": "error", // 函数参数重复 function foo(a, b, a)
    "no-dupe-keys": "error", // 对象属性重复 { bar: 'baz', bar: 'qux' }
    "no-duplicate-case": "error", // switch语句出现重复case判断
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true
      }
    ], // 空块 ==> if(a){}
    "no-empty-character-class": "error", // 正则表达式中的空 ==> /^abc[]/
    "no-ex-assign": "error", // catch中的空e被重新赋值 ==> try {} catch (e) {e = 10;}
    "no-extra-boolean-cast": "error", // 不必要的布尔转化 if(!!foo)
    "no-extra-parens": [
      "off",
      "all",
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: "all", // delegate to eslint-plugin-react
        enforceForArrowConditionals: false
      }
    ], // 这个规则限制只在必要的地方使用括号
    "no-extra-semi": "error", // 多余的分号 ==> ;;
    "no-func-assign": "error", // 给函数赋值
    "no-inner-declarations": "error", // 在块里定义函数
    "no-invalid-regexp": "error", // 无效的正则表达式
    "no-irregular-whitespace": "error", // 无效的空白
    "no-obj-calls": "error", // 不允许调用全局对象属性作为函数
    "no-prototype-builtins": "error", // 不允许直接使用Object.prototypes内建的
    "no-regex-spaces": "error", // 禁止在正则表达式文字中使用多个空格 ==> var re = /foo   bar/;  var re = /foo {3}bar/;
    "no-sparse-arrays": "error", // 不允许稀疏数组  var items = [,]; var colors = [ 'red',, 'blue' ];
    "no-template-curly-in-string": "error", // 禁止使用常规字符串的模板文字占位符语法 ==> 避免跟模板字符混淆
    "no-unexpected-multiline": "error", // 不要混淆多行表达式
    "no-unreachable": "error", // 不可达的代码
    "no-unsafe-finally": "error", // 在finally块中禁止控制流程语句
    "no-unsafe-negation": "error", // 不允许否定关系运算符的左操作数
    "use-isnan": "error", // 在检查NaN时需要调用isNaN（）
    "valid-jsdoc": "off", // 有效的JSDoc注释
    "valid-typeof": ["error", { requireStringLiterals: true }] // 强制将typeof表达式与有效字符串进行比较
  }
};
