module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        // Interfaceの前にかならずIをつける
        'interface-name-prefix': 0,
        // functionの返値の型指定を必須にする
        'explicit-function-return-type': 0,
        // any の型定義を禁止
        'no-explicit-any': 0,

        // 多すぎる括弧はPrettierで消されるのでこちらはエラーを出さない
        '@typescript-eslint/no-extra-parens': 0,
        // 無駄なスペースは削除
        'no-multi-spaces': 2,
        // 不要な改行は削除
        'no-multiple-empty-lines': [2, { max: 2 }],
        // 関数とカッコはあけない
        'space-before-function-paren': [0, 'never'],
        // true/falseを無駄に使うな
        'no-unneeded-ternary': 2,
        // varは禁止
        'no-var': 2,
        // コンソールは使用しない
        'no-console': 1,
        'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
        // 配列のindexには空白入れるな(hogehoge[ x ])
        'computed-property-spacing': 2,
        // キー
        'key-spacing': 2,
        // キーワードの前後には適切なスペースを
        'keyword-spacing': 2,
        // 使ってない変数は警告
        '@typescript-eslint/no-unused-vars': 1,
        // nullableのメソッドからの返り値をnon nullに強制キャストしない
        '@typescript-eslint/no-non-null-assertion': 0,
        // キャメルケースの使用を容認
        camelcase: 0,
        // ts-ignoreを使わない
        '@typescript-eslint/ban-ts-comment': 0,
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 4,
                useTabs: false,
                semi: false,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                arrowParens: 'always',
                jsxBracketSameLine: true,
            },
        ],
    },
}
