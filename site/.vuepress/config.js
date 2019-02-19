module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': './theme',
  //       '@pages': './theme/pages',
  //       '@components': './components',
  //     }
  //   }
  // },
  plugins: [
    '@vuepress/pagination',
    ['@vuepress/blog', {
      postsDir: '_test'
    }]
  ],
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  head: [
    ['script', { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
  ],
  locales: {
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'ITConsultis',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'ITConsultis CN',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    // navbar: false,
    locales: {
      '/': {
        nav: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'News',
            link: '/news',
          },
          {
            text: 'About',
            link: '/about',
          },
          {
            text: 'Contact',
            link: '/contact',
          },
        ],
      },
      '/zh/': {
        nav: [
          {
            text: '主页',
            link: '/zh/',
          },
          {
            text: '博客',
            link: '/zh/news',
          },
          {
            text: '关于我们',
            link: '/zh/about',
          },
          {
            text: '联系',
            link: '/zh/contact',
          },
        ]
      }
    },
    sidebar: false
  }
}
