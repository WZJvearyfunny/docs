module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '个人资料',
        link: '/guide/'
      },
      {
        text: '项目经验',
        ariaLabel: 'Project Menu',
        items: [{
            text: '工作参与项目',
            link: '/language/chinese/'
          },
          {
            text: '个人外接项目',
            link: '/language/japanese/'
          }
        ]
      },
      {
        text: '社交信息',
        link: 'https://weibo.com/u/5141902005',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
    ]
  }
}