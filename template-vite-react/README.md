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
