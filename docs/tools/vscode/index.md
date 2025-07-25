---
title: 'VS Code 简介'
description: 'Visual Studio Code, VS Code 简介, VS Code 使用教程'
---

# 简介

`VS Code`全称是`Visual Studio Code`, 是一款由微软开发开源的、免费的、跨平台的、高性能的、轻量级的代码编辑器

如果你是前端开发者, 完全可以将`VS Code`作为**主力开发工具**, 这款软件是为前端开发者量身定制的, 开箱即用

如果你是做其他语言方向的开发, 并且不需要太复杂的集成开发环境, 也可以把`VS Code`作为**代码编辑器**来使用

甚至可以将`VS Code`当作写作工具, 编写`Markdown`文档纵享丝滑

## 特点

- 跨平台: 支持`MacOS`、`Windows`和`Linux`等多个平台, 在这多种平台下, 拥有一致的用户界面和开发体验
- 开源: `VS Code`的源代码以`MIT`协议开源, 👉🏻 [Github 地址](https://github.com/Microsoft/vscode-docs)
- 自带终端、图形化的调试工具、`Git`版本控制
- 插件扩展: 支持第三方插件, 功能强大, 既有中心化的插件市场, 支持`Python`、`JavaScript`、`Java`、`C++`等几乎所有编程语言
- 生态丰富: 社区生态活跃且丰富, 社区氛围浓厚
- 智能代码提示: 支持代码自动补全、语法高亮和错误检测, 可以快速生成简单的语法结构
- 高度可定制: 主题、快捷键、工作区配置均可自由调整

## 技术栈和核心组件

> 了解`VS Code`的技术栈和核心组件, 可以对`VS Code`有更深入的认识, 以下内容作为了解即可

- 开发框架: `Electron`; `Electron`可以使用`Node.js+JS`开发桌面GUI应用程序
- 编辑器: `Monaco Editor`; `Monaco Editor`是一款开源的在线代码编辑器, 是`VS Code`浏览器版本的最核心组件
- 编程语言: `TypeScript`; `TypeScript`是`JavaScript`的超集, `TS`在`JS`的基础上添加了许多功能, 引入了声明文件, 而且支持类型扩展; TS 适合长期的、多人开发的大型项目开发
- 让编辑器支持语言功能: `Language Server Protocol(LSP)`语言服务协议; `LSP`是编辑器/IDE 与语言服务器之间的一种协议, 通过`JSON-PRC`传输消息, 可以让编辑器嵌入并支持各种编程语言; 开发者可以在编辑器中使用各种语言来编写程序。
- 让编辑器支持调试功能: `Debug Adapter Protocol(DAP)`; `DAP`是基于`JSON`的协议, 它抽象了开发工具与调试工具质检的通信
- 集成终端: `Xterm.js`; `VS Code`的集成终端是基于开源项目`Xterm.js`进行开发的; `Xterm.js`是一个使用`TS`开发的终端组件; `Xterm.js`并不是直接下来下来就能用的终端应用, 它只是一个前端组件, 可以与`bash`这样的进程进行连接, 然后让用户通过`Xterm.js`进行交互
