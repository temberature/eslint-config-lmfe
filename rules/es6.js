module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  rules: {
    // https://eslint.org/docs/rules/#ecmascript-6
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: false
      }
    ], // 在箭头函数体中需要大括号
    "arrow-parens": [
      "error",
      "as-needed",
      {
        requireForBlockBody: true
      }
    ], // 在箭头函数参数中需要括号
    "arrow-spacing": ["error", { before: true, after: true }], // 在箭头函数的箭头之前/之后需要空格
    "constructor-super": "error", // 在constructor中验证super()的调用
    "generator-star-spacing": ["error", { before: false, after: true }], // 强制在generator的*周围加上空格
    "no-class-assign": "warn", // 不允许修改已声明的class
    "no-confusing-arrow": [
      "warn",
      {
        allowParens: true
      }
    ], // 混淆比较的箭头
    "no-const-assign": "warn", // 禁止给const变量赋值
    "no-dupe-class-members": "warn", // 禁止重复的类成员
    "no-duplicate-imports": "warn", // 禁止重复导入
    "no-new-symbol": "error", // 不允new一个symbol
    "no-restricted-imports": "off", // 禁止导入的模块名称
    "no-this-before-super": "error", // 在构造函数中调用supe之前不允许出现this/super
    "no-useless-computed-key": "warn", // 禁止在对象文字中使用不必要的计算属性键
    "no-useless-constructor": "warn", // 禁止不必要的constructor
    "no-useless-rename": [
      "warn",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ], // 禁止将导入，导出和解构分配重命名为相同的名称
    "no-var": "warn", // 禁用var
    "object-shorthand": "off", // 对象语法简写
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ], // 优先使用箭头函数进行回调
    "prefer-const": [
      "warn",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true
      }
    ], // 优先对声明后不改变的变量使用const
    "prefer-destructuring": [
      "warn",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ], // 优先解构声明
    "prefer-numeric-literals": "warn", // 不允许parseInt/Number.parseInt转换二进制，八进制和十六进制
    "prefer-rest-params": "warn", // 建议使用参数而不是arguments
    "prefer-spread": "warn", // 建议使用扩展运算符
    "prefer-template": "warn", // 建议使用模板字符串
    "require-yield": "warn", // 禁止没有yield的generator
    "rest-spread-spacing": ["warn", "never"], // 扩展运算符的空格
    "sort-imports": "off", // 导入排序
    "symbol-description": "warn", // symbol描述
    "template-curly-spacing": "warn", // 在模板字符串中强制使用空格
    "yield-star-spacing": ["error", "after"] // 在yield *表达式的*周围加上间距
  }
};
