/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    ignorePatterns: [
        '*.js',
        '*.json',
        '*.jpg',
        '*.svg',
        '*.json',
        '*.less',
        '*.scss',
        '*.txt',
        '*.png',
        '*.jpg',
        '*.pdf',
        '*.mp3',
        '*.ogv',
        '*.mp4',
        '*.ico',
        '*.xml',
        '*.md',
        'scripts/**',
        '*.html',
    ],
    extends: [
        '@tinkoff/eslint-config/app',
        '@tinkoff/eslint-config-angular',

        '@tinkoff/eslint-config-angular/rxjs',
        '@tinkoff/eslint-config-angular/promise',
        '@tinkoff/eslint-config-angular/imports',
        '@tinkoff/eslint-config-angular/unicorn',
        '@tinkoff/eslint-config-angular/html-eslint',
        '@tinkoff/eslint-config-angular/file-progress',
        '@tinkoff/eslint-config-angular/line-statements',
        '@tinkoff/eslint-config-angular/member-ordering',
        '@tinkoff/eslint-config-angular/decorator-position',
        '@tinkoff/eslint-config-angular/function-return-type',

        './scripts/eslint/naming-convention.js',
        './scripts/eslint/no-restricted-syntax.js',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: [require.resolve('./tsconfig.eslint.json')],
    },
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/explicit-member-accessibility': [
                    'warn',
                    {
                        accessibility: 'no-public',
                    },
                ],
            },
        },
    ],
};
