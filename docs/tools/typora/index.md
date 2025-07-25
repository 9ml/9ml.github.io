---
title: 'Typora 教程'
description: 'Typora, Typora使用教程'
aside: 'left'
---

# Typora

`Typora`官网: [https://typora.io/](https://typora.io/)

`Typora`是一款**简洁、优雅**的跨平台`Markdown`编辑器, 支持**实时预览**, 让用户专注于写作而非格式调整, 适用于 **Windows、macOS 和 Linux**, 广受程序员、写作者和笔记爱好者的喜爱

## 特点

1. **所见即所得**: 输入 Markdown 语法后，自动渲染成最终样式。
2. **极简设计**: 无干扰界面，沉浸式写作体验。
3. **支持多种格式**: 导出 **PDF、HTML、Word、LaTeX** 等格式。
4. **代码块高亮**: 支持多种编程语言语法高亮。
5. **表格、数学公式**: 轻松插入表格和 LaTeX 数学公式。
6. **主题自定义**: 可更换主题或自定义 CSS 样式。
7. **文件管理**: 支持文件树、快速搜索和目录大纲。

## 下载

`Typora`安装非常简单, 在官网下载后点击安装即可

## 扩展

### 主题

`Typora`默认是`Github`主题, 并且内置了几款主题, 点击菜单栏的**主题**即可切换

`Typora`同样支持主题扩展, 可以在[主题官网](https://theme.typora.io/)下载喜欢的主题, 或者[编写自定义主题](https://theme.typora.io/doc/Write-Custom-Theme/)

#### 安装主题

- 打开`Typora`点击菜单栏**文件 -> 偏好设置 -> 打开主题文件夹**打开`theme`目录
- 将在[主题官网](https://theme.typora.io/)下载的主题文件夹复制到`theme`目录下, 然后重启`Typora`
- 在菜单栏中点击**主题**即可看到新增的主题

#### 推荐主题

- `Drake`
- `Vue`
- `Night New`
- `Cobalt`

### 标题前缀序号

标题段落自动编号功能, 包含侧边栏大纲、目录和标题

- 打开`Typora`点击菜单栏**文件 -> 偏好设置 -> 打开主题文件夹**打开`theme`目录
- 在`theme`文件夹中新建`base.user.css`文件, 并写入以下`css`代码

```css
body {
  counter-reset: h1;
}

h1 {
  counter-reset: h1;
}

h2 {
  counter-reset: h2;
}

h3 {
  counter-reset: h3;
}

h2:before {
  counter-increment: h1;
  content: counter(h1) ".";
}

h3:before {
  counter-increment: h2;
  content: counter(h1) "." counter(h2) ". ";
}

h4:before {
  counter-increment: h3;
  content: counter(h1) "." counter(h2) "." counter(h3) ". ";
  /* content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". "; */
}
```

- 重启`Typora`
