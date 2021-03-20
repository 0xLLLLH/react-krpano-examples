module.exports = {
    parser: '@typescript-eslint/parser', // 指定parser
    plugins: ['@typescript-eslint'], // 启用插件
    extends: [
        'plugin:react/recommended', // 使用react的推荐规则
        'plugin:@typescript-eslint/recommended', // 使用推荐的规则，来自@typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // 使用eslint-plugin-prettier推荐的配置，注意需要在最后一个
    ],
    parserOptions: {
        ecmaVersion: 2020, // 让parser按更新的语法来解析
        sourceType: 'module', // 让paraer按ESM解析
        ecmaFeatures: {
            jsx: true, // 支持解析JSX
        },
    },
    rules: {
        // 此处书写需要覆盖的配置
        // 例如，"@typescript-eslint/explicit-function-return-type": "off",
        'react/prop-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
    },
    settings: {
        react: {
            version: 'detect', // 让eslint-plugin-react自动检测react版本
        },
    },
};
