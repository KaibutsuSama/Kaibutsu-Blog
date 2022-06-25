const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'zh-CN',
    title: 'KaibutsuSama',
    description: 'Welcome to my site',

    theme: defaultTheme({
        navbar: [
            // NavbarGroup
            {
                text: 'Java开发',
                children: [
                    {
                        text: "基础知识",
                        children: ['/java/base/Annotation.md',]
                    }
                ],
            },
        ],
    }),

    plugins: [
        searchPlugin({
            // 配置项
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
        }),
    ],

}

