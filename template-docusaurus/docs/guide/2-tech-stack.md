---
title: 技术选型
---

你需要有了解项目中用到的相关技术和工具：

| 相关技术 | 应用场景 | 说明 |
| --- | --- | --- |
| [Git](https://git-scm.com) | 版本控制 | 对 Git 不够了解的，看 [入坑 Git，看这一篇就够了](https://juejin.cn/post/7289661061993005093) |
| [Husky](httpshttps://typicode.github.io/husky/) | Git 门神 | 结合 commitlint、lint-staged 及各种 Linter 守卫代码身心健康，看 [你的前端工程，二哈和它的朋友们都安排上了么？](https://juejin.cn/post/7278994237949444136) |
| [TypeScript](https://www.typescriptlang.org) | 语言 / 编译 | 无 TS 不要写代码 |
| [React](https://react.dev) | 组件 | 严格来说 React 是「库」，不是「框架」，请熟练使用 Hook |
| [ReactRouter](https://reactrouter.com) | 路由管理 | 应用必须有路由，请熟练使用 Hook |
| [Styled-components](https://styled-components.com) | CSS-in-JS 解决方案 | 我唯一认可的 CSS-in-JS 解决方案 |
| [Pnpm](https://pnpm.io) | Workspace 管理 | 对比了 Npm、Yarn 等，还是 Pnpm 最好用 |
| [Lerna](https://lerna.js.org) | Monorepo 工作流 | 发包需要 |
| [Babel](https://babeljs.io) | 编译 | Package 编译（尝试了 swc，最终还是选择了 Babel） |
| [Vite](https://vite.dev) | 构建 | 主应用构建和本地开发 |
| [Vitest](https://vitest.dev/guide) | 单测 | 真正的无配置使用，完美替代 Jest |
| [Storybook](https://storybook.js.org) | Demo / 本地调试 | 写组件调试真少不了它 |
| [Docusaurus](https://docusaurus.io) | 文档 | 可能不是最强大，但绝对最好用的静态站点生成工具，看 [入坑 Docusaurus，看这一篇就够了](https://juejin.cn/post/7518188007541489704) |