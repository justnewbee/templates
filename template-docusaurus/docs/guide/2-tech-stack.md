---
title: 技术选型
---

基于项目需求、团队技术储备以及技术生态等因素考量，从 **开发** 和 **工程** 两个维度确定了适用的技术选型。

## 开发相关 {#dev}

### TypeScript - 编程语言 {#typescript}

> TS 不止是一门编程语言，它是帮助我们理清思路的工具，**无 TS 不要写代码**。

* 官网：[TypeScript](https://www.typescriptlang.org)
* 原因：作为 JavaScript 的超集，TypeScript 提供了静态类型检测，能在开发期间（而不是运行期间）第一时间发现程序错误，并且类型定义

### React - 组件框架 {#react}

> 严格来说 React 是「库」，不是「框架」，请熟练使用 Hook。

* 官网：[React](https://react.dev)
* 原因：我们的技术栈用的都是 React，包括三方的组件库和自研的组件

### ReactRouter - 路由管理 {#react-router}

> 应用必需有路由，请熟练使用 Hook。

* 官网：[ReactRouter](https://reactrouter.com)
* 原因：React 应用下，路由管理的不二之选

### StyledComponents - CSS-in-JS {#styled-components}

> 我唯一认可的 CSS-in-JS 解决方案。

* 官网：[styled-components](https://styled-components.com)
* 原因：CSS-in-JS 的好处是，封装组件无后顾之忧，且我们提供了基于 styled-components 的 mixin 包，以帮助简化开发

## 工程相关 {#engeer}

### Pnpm - 包管理工具 {#pnpm}

> 项目唯一允许的包 / Workspace 管理工具，在工程上使用 [only-allow](https://www.npmjs.com/package/only-allow) 对此进行了强制约束。

* 官网：[pnpm](https://pnpm.io)
* 原因：在磁盘利用、依赖管理、安装速度、便利性等方面，pnpm 比 npm、yarn 等略胜一筹

更多内容，可以看看 [《Workspace 那些破事 - 浅探 npm、yarn、pnpm、bun》](https://juejin.cn/post/7278245697164410914)。

### Husky - Git 门神 {#husky}

> 不良代码统统不允许提交。

* 官网：[Husky](https://typicode.github.io/husky/)
* 原因：结合 [lint-staged](https://www.npmjs.com/package/lint-staged) 及各种 Linter 守卫代码身心健康

项目用到的 Linter 有：

| Linter | 说明 |
| --- | --- |
| [CommitLint](https://commitlint.js.org) | Git 提交规范 |
| [ESLint](https://eslint.org) | TypeScript / JavaScript 规范，使用 [@kcuf/eslint-config](https://www.npmjs.com/package/@kcuf/eslint-config) |
| [StyleLint](https://stylelint.io) | 样式规范，使用 [@kcuf/stylelint-config](https://www.npmjs.com/package/@kcuf/stylelint-config) |
| [MarkdownLint](https://github.com/DavidAnson/markdownlint) | Markdown 规范，使用 [@kcuf/markdownlint-config](https://www.npmjs.com/package/@kcuf/markdownlint-config) |
| [npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint) | `package.json` 规范，使用 [@kcuf/npm-package-json-lint-config](https://www.npmjs.com/package/@kcuf/npm-package-json-lint-config) |
| [ZhLint](https://zhlint.jinjiang.dev) | 中文书写规范 TODO 🤪 |

更多内容，可以看看 [《你的前端工程，二哈和它的朋友们都安排上了么？》](https://juejin.cn/post/7278994237949444136)。

### Ncu - NPM 版本检测及升级功能

> 保证整个 Workspace 下的包都紧跟时代步伐，让思想不要落伍。

* 官网：[npm - npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
* 原因：跟进社区动态，第一时间了解依赖的更新，保证项目活力

### Depcheck

> 包健康，项目才会健康。

* 官网：[npm - depcheck](https://www.npmjs.com/package/depcheck)
* 原因：检测 `package.json` 依赖项是否完整，是否有冗余

### Lerna - Monorepo 工作流 {#lerna}

> 项目 Workspace 的形式组织，发包需要用到它。

* 官网：[Lerna](https://lerna.js.org)
* 原因：强大且易用的 Monorepo 管理工具，极大地提升发包效率

### Babel - 构建工具 {#babel}

> 编译和构建 Package。

* 官网：[Babel](https://babeljs.io)
* 原因：尝试了 [swc](https://swc.rs)，最终还是选择了更老牌的 Babel

### Vite - 构建工具 {#vite}

> 主应用构建与本地开发。

* 官网：[Vite](https://vite.dev)
* 原因：基于浏览器原生的 ES 模块，按需编译，大大提升了开发效率，且对 TypeScript、CSS 预处理器等的支持也非常友好

### Vitest - Package 单测 {#vitest}

> 有单测，才能更放心。

* 官网：[Vitest](https://vitest.dev/guide)
* 原因：真正无配置使用，对齐 Jest，但比 Jest 好用，完美替代 Jest

### Storybook - Package 开发与调试 {#storybook}

* 官网：[Storybook](https://storybook.js.org)
* 原因：写组件调试真少不了它

### Docusaurus - 文档框架 {#docusaurus}

* 官网：[Docusaurus](https://docusaurus.io)
* 原因：可能不是最强大，但绝对最好用的基于 React 和 MDX 的静态站点生成工具

更多内容，可以看看 [《入坑 Docusaurus，看这一篇就够了》](https://juejin.cn/post/7518188007541489704)。

## FAQ

### 没有状态管理库？ {#state-manager}

要不要引入状态管理库，比如 Redux、Zustand 等？

**不需要**。依赖全局状态，将使业务逻辑集中在路由层，导致代码可复用性、可迁移性都会变差。

使用 React `useReducer` 和自定义 Hooks 更直观和简单，且更适合写组件的场景，这样可以把更多的业务能力组件化，使路由层逻辑变薄，从而提升整体的可维护性。
