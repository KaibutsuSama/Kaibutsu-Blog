import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

import nav from '../common/nav';
import htmlModules from "./htmlModules";

// 主题配置
export default  <VdoingThemeConfig> {
    nav, //导航栏

    // 导航配置

    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'kaibutsusama/Kaibutsu-Blog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    category: false, // 是否打开分类功能，默认true
    tag: true, // 是否打开标签功能，默认true
    archive: true, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    indexImg: {
        navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
        switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
        // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
        bgTimeColor: false,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
        bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
        descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
        desc: ["夜撫でるメノウ / Ayase"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
        descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
        descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
        descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
        descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
        bubble: false,    // 是否开启图片的气泡效果，默认为 false
        bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
        bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
    },


    bodyBgImg: [
        'https://images.wallpaperscraft.com/image/single/room_book_read_92289_1280x720.jpg',
    ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    bodyBgImgOpacity: 1.0, // body背景图透明度，选值 0.1~1.0, 默认0.5
    bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    titleBadge: false, // 文章标题前的图标是否显示，默认true
    titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        '图标地址1',
        '图标地址2'
    ],
    // contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    updateBar: { // 最近更新栏
        showToArticle: true, // 显示到文章页底部，默认true
        // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    defaultMode: 'dark',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
        name: 'KaibutsuSama', // 必需
        link: 'https://github.com/Kaibutsu', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
        avatar: 'https://avatars.githubusercontent.com/u/108192901?s=400&u=b4cb0547bdb05ddf264adebf0027a7ad92a449e0&v=4',
        name: 'KaibutsuSama',
        // slogan: '签名',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
        // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
        icons: [
            {
                iconClass: 'icon-youjian',
                title: '发邮件',
                link: 'mailto:XINLEROY.LIU001@STU.BMCC.CUNY.EDU\n',
            },
            {
                iconClass: 'icon-github',
                title: 'GitHub',
                link: 'https://github.com/kaibutsusama',
            },
        ],
    },

    // 页脚信息
    footer: {
        createYear: 2022, // 博客创建年份
        copyrightInfo:
            'Kaibutsu | <a href="https://github.com/kaibutsusama" target="_blank">MIT License</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
        author: {
            name: 'KaibutsuSama',
            link: 'https://github.com/kaibutsusama'
        }
    },

    // 自定义hmtl(广告)模块
    htmlModules
}
