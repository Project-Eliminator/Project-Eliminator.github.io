import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Project Eliminator",
  description: "Documentation for Project Eliminator",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Download', link: '/download/' },
      { text: 'Guides For Russian', link: '/RG/' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Download', link: '/download/' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/project_elimiantor' }
    ]
  }
})
