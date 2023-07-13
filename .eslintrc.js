// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module'
    },
    env: { browser: true },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
        // 'standard',
        // 'plugin:vue/recommended'
    ],
    plugins: [
        // 'html',
        // 'standard',
        'vue'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        indent: ['error', 4],
        semi: ['error'],
        'space-before-function-paren': ['error', 'never'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
