---
title: 代码规范
---

## 目录及文件名规范

* 全小写，连字符用中划线 `-`，可以用下划线打头 `_` 表示模块内通用，且不希望对外的
* 名词尽量用单数，避免使用复数

## 代码规范 - TypeScript

> 使用 [@kcuf/eslint-config](https://www.npmjs.com/package/@kcuf/eslint-config) 设置。

* 不允许 `.jsx?` 文件，即不允许写 JS
* 除非有充分的理由，否则不允许 `any`、`Function` 等类型
* 代码折行不要太短，一句三折其实只会影响可读性
* 小括号一般不折行，大括号一定折行（除了模板字符串和 React 插值）
* 代码行数控制在 70 行以内，若超出，则考虑拆分

## 代码规范 - 样式

> 使用 [@kcuf/stylelint-config](https://www.npmjs.com/package/@kcuf/stylelint-config) 设置。

* 只用 `styled-components`，不允许使用 CSS、SCSS、LESS 等（不用担心，写 `styled-components` 很像写 LESS）
* 避免使用 `class` 和 `style`

## 代码规范 - React

* React 组件内不允许裸写方法，永远 `useCallback`
* React 组件直接 `export default function Xx(props: XxProps): ReactComponent {...}`，不要先定义后 `export`
* React 不允许 `{xx && <..>}` 的写法，用三元表达式 `{xx ? <..> : null}`

## 代码规范 - 路由

* 除参数允许骆驼格式外，其余全小写，中划线，使用枚举统一定义，不允许硬编码
* 首选使用路由参数，`URLSearchParams` 用于处理类似分页等可选参数，比如 `/project/:projectId` 优于 `/project/detail?id=`

## 其他

* 不允许 `window.open`，使用链接 `href`
