module.exports = {
  title:"PIPEDREAM's live",
  description:"这是我的个人世界，存储在互联网上，用二进制的形式永存于世",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico', }],
    ['meta', { name: 'author', content: '这是王真俊的自我描述，从24岁开始记录人生的一点一滴' }]
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/logo.png',
    nav: [{
      text: '主页',
      link: '/'
    },
    {
      text: '个人资料',
      link: '/about'
    },
    {
      text: '项目经验',
      ariaLabel: 'Project Menu',
      items: [{
        text: '工作参与项目',
        items: [{ text: '大屏展示', link: '/language/chinese/' }, { text: '网页应用', link: '/language/chinese/' }, { text: '桌面客户端', link: '/language/chinese/' }, { text: 'Android APP', link: '/language/chinese/' }, { text: '小程序', link: '/language/chinese/' }],
      },
      {
        text: '个人外接项目',
        // link: '/language/japanese/'
        items: [{ text: "小程序", link: '' }],
      }
      ]
    },
    {
      text: '社交信息',
      link: 'https://weibo.com/u/5141902005',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    ],
    sidebar: [
      '',
      'about'
    ]
  }
}