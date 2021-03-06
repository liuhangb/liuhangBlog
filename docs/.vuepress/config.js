module.exports = {
    title: 'Lh\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        // 增加一个自定义的 favicon(网页标签的图标)，注意图片放在public文件夹下
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            {text: 'Android笔记', link: '/android/' },
            {text: '算法题库', link: '/algorithm/'},
            {text: 'Github', link: 'https://github.com/liuhangb'}
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};