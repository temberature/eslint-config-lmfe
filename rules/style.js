module.exports = {
  rules: {
    // https://eslint.org/docs/rules/#stylistic-issues
    "array-bracket-newline": "off", // 在打开和关闭数组括号之前强制换行
    "array-bracket-spacing": ["error", "never"], // 禁止或强制方括号内的空格
    "array-element-newline": "off", // 在数组元素之间强制换行
    "block-spacing": ["error", "never"], // 强制块之间的空格
    "brace-style": "error", // brace风格
    camelcase: [
      "error",
      {
        properties: "never"
      }
    ], // camelcase命名
    "capitalized-comments": "off", // 强制注释首字母大写
    "comma-dangle": ["error", "always-multiline"], // []/{}结尾逗号
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ], // 逗号前后空格
    "comma-style": ["error", "last"], // 逗号风格
    "computed-property-spacing": ["error", "never"], // 禁止或强制执行属性访问操作中的空格 ==> obj[foo ]
    "consistent-this": ["error", "me"], // 一致的this命名
    "eol-last": ["error"], // 文件结尾，保留一个空行
    "func-call-spacing": ["error", "never"], // 函数调用空格
    "func-name-matching": "off", // 需要函数名称来匹配它们被赋值的变量或属性的名称
    "func-names": "off", // 禁止命名的函数表达式
    "func-style": "off", // 一致的函数声明风格
    "function-paren-newline": ["warn", "multiline"], // 强制在函数括号内包含换行符
    "id-blacklist": "off", // 变量定义黑名单
    "id-length": "off", // 变量命名的字数限制
    "id-match": "off", // 变量命名的规则
    "implicit-arrow-linebreak": ["warn", "beside"], // 定义箭头函数体的返回位置
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        ignoreComments: false
      }
    ], // 缩进规则
    "jsx-quotes": "off", // 在JSX属性中强制使用双引号或单引号
    "key-spacing": [
      "error",
      {
        afterColon: true
      }
    ], // 对象中属性的空格风格
    "keyword-spacing": [
      "error",
      {
        before: true
      }
    ], // 关键字的空格风格
    "line-comment-position": "off", // 单行注释的位置
    "linebreak-style": ["error", "unix"], // 一致的换行样式
    "lines-around-comment": "off", // 注释周围需要空行
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: false }
    ], // class成员内部的换行
    "max-depth": "off", // 块状嵌套最大的数量
    "max-len": [
      "warn",
      {
        code: 120,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ], // 代码单行最大字符数
    "max-lines": "off", // 文件最大行数
    "max-nested-callbacks": "off", // 强制回调可以嵌套的最大深度
    "max-params": "off", // 参数最大个数 由于会对amd报错 因此改成warn
    "max-statements": "off", // 强制允许在功能块中允许的最大数量的语句
    "max-statements-per-line": "off", // 强制每行允许的最大数量的语句
    "multiline-comment-style": ["off", "starred-block"], // 多行注释风格
    "multiline-ternary": ["warn", "always-multiline"], // 在三元表达式的操作数之间强制或禁止换行
    "new-cap": "error", // 需要构造函数名称以大写字母开头
    "new-parens": "warn", // 调用不带参数的构造函数时需要括号
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 4
      }
    ], // 在方法链中每次调用之后都需要一个换行符
    "no-array-constructor": "error", // 禁用Array构造
    "no-bitwise": "off", // 禁用位操作
    "no-continue": "off", // 禁用continue
    "no-inline-comments": "off", // 代码后不允许内嵌注释
    "no-lonely-if": "off", // if单独出现
    "no-mixed-operators": "off", // 禁止混用不同的运算符 可用括号隔开
    "no-mixed-spaces-and-tabs": "error", // 禁止混用缩进方式
    "no-multi-assign": "off", // 禁止链式赋值
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2
      }
    ], // 定义空行数量
    "no-negated-condition": "off", // 禁用否定条件
    "no-nested-ternary": "off", // 禁止嵌套的三元表达式
    "no-new-object": "error", // 不适用new Object创建对象
    "no-plusplus": "off", // 禁用++ --操作符
    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ], // 禁用的语法
    "no-tabs": "error", // 禁用tab
    "no-ternary": "off", // 禁用三元运算符
    "no-trailing-spaces": "error", // 行尾不加空格
    "no-underscore-dangle": "off", // 变量声明禁用下划线_
    "no-unneeded-ternary": "off", // 禁用不必要的三元操作符
    "no-whitespace-before-property": "error", // 在属性之前禁止使用空格
    "nonblock-statement-body-position": ["error", "below"], // 单行语句的格式
    "object-curly-newline": [
      "error",
      {
        consistent: true
      }
    ], // 在大括号内的换行符
    "object-curly-spacing": ["error", "always"], // 在大括号内执行一致的间距 ***
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true
      }
    ], // 对象属性独占一行
    "one-var": [
      "error",
      {
        var: "never",
        let: "never",
        const: "never"
      }
    ], // 变量在function中声明方式 分开/一起
    "one-var-declaration-per-line": ["error", "always"], // 变量声明独立一行
    "operator-assignment": "off", // 是否强制或允许简写运算赋 ==> x += y
    "operator-linebreak": "off", // 强制运算符换行
    "padded-blocks": ["error", "never"], // 块内填充
    "padding-line-between-statements": "off", // 在语句之间填充行
    "quote-props": ["error", "consistent"], // 兑现的属性加引号
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ], // 引号一致性
    "require-jsdoc": [
      "off",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true
        }
      }
    ], // jsdoc注释风格
    semi: ["error", "always"], // 是否强制句尾分号
    "semi-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ], // 分号后面加空格
    "semi-style": ["error", "last"], // 分号风格
    "sort-keys": "off", // 对象属性声明属性排序
    "sort-vars": "off", // 变量声明属性排序
    "space-before-blocks": ["error", "always"], // 块之前的空格
    "space-before-function-paren": [
      "error",
      {
        asyncArrow: "always",
        anonymous: "never",
        named: "never"
      }
    ], // 参数括号前的空格
    "space-in-parens": ["warn", "never"], // 括号内的空格
    "space-infix-ops": "error", // 括号内的空格
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ], // 一元运算符之前/之后的空格
    "spaced-comment": ["error", "always"], // 注释开始后第一个空格
    "switch-colon-spacing": ["error", { after: true, before: false }], // switch语句的冒号周围加上间距
    "template-tag-spacing": ["error", "always"], // 模板标签及其文字之间的间距
    "unicode-bom": "off", // Unicode BOM
    "wrap-regex": "off" // 包装正则表达式字面值
  }
};
