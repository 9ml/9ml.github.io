import { defineConfig } from "vitepress";

export default defineConfig({
  title: "坐忘道",
  description: "意境两忘, 物我一体",
  themeConfig: {
    logo: "/logo.png",
    lastUpdated: {
      text: "更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    outline: {
      label: "本章目录",
      level: [2, 6],
    },
    docFooter: {
      prev: "上个章节",
      next: "下个章节",
    },
    editLink: {
      pattern: "https://github.com/9ml/9ml.github.io/tree/master/:path",
      text: "在 GitHub 上编辑此页面",
    },
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "前端",
        items: [
          {
            text: "HTML",
            link: "/docs/frontend/html/index.md",
            activeMatch: "/docs/frontend/html/",
          },
          {
            text: "CSS",
            link: "/docs/frontend/css/index.md",
            activeMatch: "/docs/frontend/css/",
          },
          {
            text: "JavaScript",
            link: "/docs/frontend/js/index.md",
            activeMatch: "/docs/frontend/js/",
          },
          {
            text: "TypeScript",
            link: "/docs/frontend/ts/index.md",
            activeMatch: "/docs/frontend/ts/",
          },
          {
            text: "Vue",
            link: "/docs/frontend/vue/index.md",
            activeMatch: "/docs/frontend/vue/",
          },
          {
            text: "React",
            link: "/docs/frontend/react/index.md",
            activeMatch: "/docs/frontend/react/",
          },
        ],
      },
      {
        text: "后端",
        items: [
          {
            text: "PHP",
            link: "/docs/backend/php/index.md",
            activeMatch: "/docs/backend/php/",
          },
          {
            text: "Node",
            link: "/docs/backend/node/index.md",
            activeMatch: "/docs/backend/node/",
          },
          {
            text: "Java",
            link: "/docs/backend/java/index.md",
            activeMatch: "/docs/backend/java/",
          },
          {
            text: "Go",
            link: "/docs/backend/go/index.md",
            activeMatch: "/docs/backend/go/",
          },
        ],
      },
      {
        text: "游戏",
        items: [
          {
            text: "C#",
            link: "/docs/game/c_sharp/index.md",
            activeMatch: "/docs/game/c_sharp/",
          },
          {
            text: "Unity 3D",
            link: "/docs/game/unity/index.md",
            activeMatch: "/docs/game/unity/",
          },
          {
            text: "LayaAir",
            link: "/docs/game/layaair/index.md",
            activeMatch: "/docs/game/layaair/",
          },
          {
            text: "Cocos Creator",
            link: "/docs/game/cocos/index.md",
            activeMatch: "/docs/game/cocos/",
          },
        ],
      },
      {
        text: "工具",
        items: [
          {
            text: "Git",
            link: "/docs/tools/git/index.md",
            activeMatch: "/docs/tools/git/",
          },
          {
            text: "Typora",
            link: "/docs/tools/typora/index.md",
            activeMatch: "/docs/tools/typora/",
          },
          {
            text: "VS Code",
            link: "/docs/tools/vscode/index.md",
            activeMatch: "/docs/tools/vscode/",
          }
        ],
      },
      {
        text: "分享",
        link: "/docs/share",
      },
      {
        text: "关于",
        link: "/docs/about",
      },
    ],

    sidebar: {
      "/docs/road": [
        {
          text: "革命之路",
          collapsed: false,
          items: [
            {
              text: "写在前面",
              link: "/docs/road/index.md",
            },
            {
              text: "前端路线",
              link: "/docs/road/core/frontend.md",
            },
            {
              text: "后端路线",
              link: "/docs/road/core/backend.md",
            },
            {
              text: "游戏路线",
              link: "/docs/road/core/game.md",
            }
          ]
        }
      ],
      "/docs/frontend/ts/": [
        {
          text: "TypeScript 教程",
          collapsed: false,
          items: [
            {
              text: "前言",
              link: "/docs/frontend/ts/index.md",
            },
            {
              text: "简介",
              link: "/docs/frontend/ts/core/01.introduction.md",
            },
            {
              text: "环境搭建",
              link: "/docs/frontend/ts/core/02.init.md",
            },
            {
              text: "TS 中的类型",
              collapsed: false,
              items: [
                {
                  text: "类型声明及推断",
                  link: "/docs/frontend/ts/core/03-1.variable&interface.md",
                },
                {
                  text: "类型总览",
                  link: "/docs/frontend/ts/core/03-2.overview.md",
                },
                {
                  text: "常用类型",
                  link: "/docs/frontend/ts/core/03-3.common.md",
                },
                { text: "泛型", link: "/docs/frontend/ts/core/03-4.generic.md" },
                {
                  text: "类型声明文件",
                  link: "/docs/frontend/ts/core/03-5.type_file.md",
                },
              ],
            },
            {
              text: "命名空间",
              link: "/docs/frontend/ts/core/04.namespace.md",
            },
            {
              text: "设计模式",
              collapsed: false,
              items: [
                {
                  text: "设计模式简介",
                  link: "/docs/frontend/ts/core/05-1.design_pattern.md",
                },
                {
                  text: "单例模式",
                  link: "/docs/frontend/ts/core/05-2.dp_singleton.md",
                },
                {
                  text: "代理模式",
                  link: "/docs/frontend/ts/core/05-3.dp_proxy.md",
                },
                { text: "观察者模式", link: "/docs/frontend/ts/core/05-4.dp_observer.md" },
                {
                  text: "工厂模式",
                  link: "/docs/frontend/ts/core/05-5.dp_factory.md",
                },
              ],
            },
            {
              text: "链表",
              link: "/docs/frontend/ts/core/06.link_list.md",
            },
            {
              text: "装饰器",
              collapsed: false,
              items: [
                {
                  text: "装饰器简介",
                  link: "/docs/frontend/ts/core/07-1.decorator.md",
                },
                {
                  text: "类装饰器",
                  link: "/docs/frontend/ts/core/07-2.dec_class.md",
                },
                {
                  text: "装饰器工厂",
                  link: "/docs/frontend/ts/core/07-3.dec_factory.md",
                },
                {
                  text: "装饰器组合",
                  link: "/docs/frontend/ts/core/07-4.dec_combination.md",
                },
                {
                  text: "属性装饰器",
                  link: "/docs/frontend/ts/core/07-5.dec_attribute.md",
                },
                {
                  text: "方法装饰器",
                  link: "/docs/frontend/ts/core/07-6.dec_method.md",
                },
                {
                  text: "访问器装饰器",
                  link: "/docs/frontend/ts/core/07-7.doc_accessor.md",
                },
                {
                  text: "参数装饰器",
                  link: "/docs/frontend/ts/core/07-8.doc_param.md",
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/9ml" }],
  },
});
