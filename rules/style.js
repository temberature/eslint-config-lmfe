module.exports = {
  rules: {
    // https://eslint.org/docs/rules/#stylistic-issues
    "array-bracket-newline": ["warn", "consistent"], // 在打开和关闭数组括号之前强制换行
    "array-bracket-spacing": ["warn", "never"], // 禁止或强制方括号内的空格
    "array-element-newline": ["off", "never"], // 在数组元素之间强制换行
    "block-spacing": ["warn", "never"], // 强制块之间的空格
    "brace-style": [
      "warn",
      "1tbs",
      {
        allowSingleLine: true
      }
    ], // brace风格
    camelcase: [
      "warn",
      {
        properties: "never"
      }
    ], // camelcase命名
    "capitalized-comments": "off", // 强制注释首字母大写
    "comma-dangle": [
      "warn",
      {
        // 禁止尾随逗号
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    "comma-spacing": [
      "warn",
      {
        before: false,
        after: true
      }
    ], // 强制逗号间隔
    "comma-style": ["warn", "last"], // 逗号风格
    "computed-property-spacing": ["warn", "never"], // 禁止或强制执行属性访问操作中的空格 ==> obj[foo ]
    "consistent-this": ["error", "me"], // 一致的this命名
    "eol-last": ["warn"], // 文件结尾，保留一个空行
    "func-call-spacing": ["warn", "never"], // 函数调用空格
    "func-name-matching": ["error", "never"], // 需要函数名称来匹配它们被赋值的变量或属性的名称
    "func-names": ["warn", "never"], // 禁止命名的函数表达式
    "func-style": [
      "off",
      "expression",
      {
        allowArrowFunctions: true
      }
    ], // 一致的函数声明风格
    "function-paren-newline": ["warn", "multiline"], // 强制在函数括号内包含换行符
    "id-blacklist": ["off", "err", "e", "cb", "callback"], // 变量定义黑名单
    "id-length": ["off", { min: 2 }], // 变量命名的字数限制
    "id-match": ["off", "^[a-z]+([A-Z][a-z]+)*$"], // 变量命名的规则
    "implicit-arrow-linebreak": ["warn", "below"], // 定义箭头函数体的返回位置
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
    "jsx-quotes": ["off"], // 在JSX属性中强制使用双引号或单引号
    "key-spacing": [
      "warn",
      {
        afterColon: true
      }
    ], // 对象中属性的空格风格
    "keyword-spacing": [
      "warn",
      {
        before: true
      }
    ], // 关键字的空格风格
    "line-comment-position": [
      "off",
      {
        position: "above"
      }
    ], // 单行注释的位置
    "linebreak-style": ["off", "unix"], // 一致的换行样式
    "lines-between-class-members": ["warn", "never"], // class成员内部的换行
    "max-depth": ["warn", 4], // 块状嵌套最大的数量
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
    "max-lines": [
      "off",
      {
        max: 300
      }
    ], // 文件最大行数
    "max-nested-callbacks": ["warn", 3], // 强制回调可以嵌套的最大深度
    "max-params": ["warn", 6], // 参数最大个数 由于会对amd报错 因此改成warn
    "max-statements": ["off", 10], // 强制允许在功能块中允许的最大数量的语句
    "max-statements-per-line": [
      "warn",
      {
        max: 1
      }
    ], // 强制每行允许的最大数量的语句
    "multiline-comment-style": ["off", "starred-block"], // 多行注释风格
    "multiline-ternary": ["warn", "always-multiline"], // 在三元表达式的操作数之间强制或禁止换行
    "new-cap": "warn", // 需要构造函数名称以大写字母开头
    "new-parens": "warn", // 调用不带参数的构造函数时需要括号
    "newline-per-chained-call": [
      "warn",
      {
        ignoreChainWithDepth: 2
      }
    ], // 在方法链中每次调用之后都需要一个换行符
    "no-array-constructor": "warn", // 禁用Array构造
    "no-bitwise": "off", // 禁用位操作
    "no-continue": "warn", // 禁用continue
    "no-inline-comments": "off", // 代码后不允许内嵌注释
    "no-lonely-if": "warn", // if单独出现
    "no-mixed-operators": "warn", // 禁止混用不同的运算符 可用括号隔开
    "no-mixed-spaces-and-tabs": ["warn", "smart-tabs"], // 禁止混用缩进方式
    "no-multi-assign": "warn", // 禁止链式赋值
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 2
      }
    ], // 定义空行数量
    "no-negated-condition": "off", // 禁用否定条件
    "no-nested-ternary": "warn", // 禁止嵌套的三元表达式
    "no-new-object": "warn", // 不适用new Object创建对象
    "no-plusplus": "off", // 禁用++ --操作符
    "no-restricted-syntax": ["warn", "WithStatement"], // 禁用的语法
    "no-tabs": "warn", // 禁用tab
    "no-ternary": "off", // 禁用三元运算符
    "no-trailing-spaces": "off", // 行尾不加空格
    "no-underscore-dangle": "off", // 变量声明禁用下划线_
    "no-unneeded-ternary": "warn", // 禁用不必要的三元操作符
    "no-whitespace-before-property": "warn", // 在属性之前禁止使用空格
    "nonblock-statement-body-position": ["warn", "below"], // 单行语句的格式
    "object-curly-newline": [
      "warn",
      {
        consistent: true
      }
    ], // 在大括号内的换行符
    "object-curly-spacing": ["off", "always"], // 在大括号内执行一致的间距 ***
    "object-property-newline": [
      "warn",
      {
        allowMultiplePropertiesPerLine: true
      }
    ], // 对象属性独占一行
    "one-var": ["off", "always"], // 变量在function中声明方式 分开/一起
    "one-var-declaration-per-line": ["warn", "initializations"], // 变量声明独立一行
    "operator-assignment": "off", // 是否强制或允许简写运算赋 ==> x += y
    "operator-linebreak": "off", // 强制运算符换行
    "padded-blocks": "off", // 块内填充
    "padding-line-between-statements": "off", // 在语句之间填充行
    "quote-props": "off", // 属性加引号
    quotes: ["error", "single", { avoidEscape: true }], // 引号一致性
    "require-jsdoc": "off", // jsdoc注释风格
    semi: ["off", "always"], // 是否强制句尾分行
    "semi-spacing": [
      "warn",
      {
        before: false,
        after: true
      }
    ], // 分号后面加空格
    "semi-style": ["warn", "last"], // 分号风格
    "sort-keys": "off", // 对象属性声明属性排序
    "sort-vars": "off", // 变量声明属性排序
    "space-before-blocks": ["warn", "always"], // 块之前的空格
    "space-before-function-paren": ["warn", "always"], // 参数括号前的空格
    "space-in-parens": ["warn", "never"], // 括号内的空格
    "space-infix-ops": [
      "warn",
      {
        int32Hint: false
      }
    ], // 括号内的空格
    "space-unary-ops": "off", // 一元运算符之前/之后的空格
    "spaced-comment": ["warn", "always"], // 注释开始后第一个空格
    "switch-colon-spacing": [
      "off",
      {
        after: false,
        before: false
      }
    ], // switch语句的冒号周围加上间距
    "template-tag-spacing": ["warn", "always"], // 模板标签及其文字之间的间距
    "unicode-bom": ["off", "always"], // Unicode BOM
    "wrap-regex": "off" // 包装正则表达式字面值
  }
};
