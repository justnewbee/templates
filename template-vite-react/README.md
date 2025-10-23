# Template Vite React App

## 代码结构

```text
./
 ├─ public/                   # 静态资源目录，参考 https://vite.dev/guide/assets.html#the-public-directory
 ├─ src/                      # 主应用目录
 │  ├─ app/                   # React App
 │  │  ├─ ...
 │  │  ├─ setup.ts            # 一些全局设置
 │  │  └─ index.tsx
 │  ├─ enum/index.ts          # 枚举
 │  ├─ helper/                # 业务特向帮助方法，以目录组织
 │  │  └─ helper-xx/
 │  ├─ op/                    # 对用户行为的 Promise 封装，不可使用 Router 等上下文
 │  │  └─ op-xx/
 │  ├─ rc/                    # React Component，纯组件，接收 Props，不可使用 Router 等上下文
 │  │  └─ xx/
 │  ├─ rcc/                   # React Component (Consumer)，消费者组件，需要且一定会用 Router 等上下文的组件
 │  │  └─ xx/
 │  ├─ router/                # 路由组件（即页面），以目录组织
 │  │  ├─ _root               # 最外层路由，负责通用逻辑
 │  │  ├─ route-xx/
 │  │  └─ index.tsx           # 被 App 依赖，ReactRouter Data 模式，使用 `createBrowserRouter`
 │  ├─ util/                  # 工具方法几何，一个方法一个文件
 │  │  ├─ ...
 │  │  └─ index.ts            # 集中输出
 │  ├─ index.css              # 全局样式，💥全应用只有这一个 CSS 文件，只负责全局，不可轻易修改
 │  └─ index.tsx              # 主应用入口
 └─ ...                       # 工程文件
```

## 规范

### 目录及文件名规范

* 全小写，连字符用中划线 `-`，可以用下划线打头 `_` 表示模块内通用，且不希望对外的
* 避免复数写法，以上 `page`、`util` 等均为单数写法

### 代码规范 - TypeScript

* 不允许 `.jsx?` 文件，即不允许写 JS
* 除非有充分的理由，否则不允许 `any`、`Function` 等类型
* 代码折行不要太短，一句三折其实会影响可读性
* 小括号一般不折行，大括号一定折行（除了模板字符串和 React 插值）
* 代码行数控制在 70 行以内，若超出，则考虑拆分
* 不允许 `window.open`

### 代码规范 - React

* React 组件内不允许裸写方法，用 `useCallback`
* React 组件直接 `export default function Xx(props: XxProps): ReactComponent {...}` 这样的写法
* React 不允许 `{xx && <..>}` 的写法，改 `{xx ? <..> : null}`

### 代码规范 - 样式

* 只用 `styled-components`，不允许使用 CSS、SCSS、LESS 等（不用担心，写 `styled-components` 很像写 LESS）
* 避免使用 `class` 和 `style`

### 代码规范 - 路由

* 和文件一样，全小写，中划线
* 首选路由参数，`URLSearchParams` 用于处理类似分页等参数
* 路由参数用骆驼格式
* 所有的路由只有一处定义，即 `src/helper/helper-router` 下，别出只能引用，不允许硬编码

### 代码提交规范

* 不允许跳过 husky 检测
* 任何 `eslint-disable` 或 `stylelint-disable` 必须有充分的理由

### 代码注释及站点文案规范

* 中文与英文字母、数字、链接之间加且仅加一个空格
* 中文中混杂的英文，除非特殊情况，统一大写字母打头
* 中文句子中不允许用英文标点，反之亦然
