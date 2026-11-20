# Interconnects Dashboard 中文化

<a href="https://raw.githubusercontent.com/shiluodeqiou/interconnects-dashboard-zh-cn/main/interconnects-dashboard-zh-cn.user.js"><img src="https://img.shields.io/badge/%E7%9B%B4%E6%8E%A5%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC-%E7%82%B9%E5%87%BB%E5%AE%89%E8%A3%85-2ea44f?style=for-the-badge" alt="直接安装脚本"></a>

这是一个适用于 Tampermonkey、Violentmonkey 等用户脚本管理器的简体中文翻译脚本，用于：

<https://dashboard.interconnects.ai/>

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 或 Violentmonkey。
2. 打开 [`interconnects-dashboard-zh-cn.user.js`](./interconnects-dashboard-zh-cn.user.js)。
3. 点击脚本管理器显示的安装按钮。
4. 打开或刷新 Interconnects Dashboard。

脚本使用 `MutationObserver` 处理 React 异步渲染、图表 SVG 文本、图表 Tooltip、动态更新内容以及方法说明中的常用界面文本。模型名称、数值、外部链接和数据日期保留原样，便于与原始数据核对。

## 适配范围

- 页面标题、导航、数据概览和热门模型说明
- 下载量、衍生模型、研究采用度、推理用量等图表标题与控件
- 图例、按钮、可访问性标签、Tooltip 和方法说明
- 图表切换、筛选、展开说明后的动态文本

## 说明

数据由 Interconnects AI 提供，翻译脚本只修改浏览器中的显示文本，不修改网站数据或向第三方发送数据。
