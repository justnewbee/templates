---
title: 快速开始
---

## 环境

* 测试环境 - xx
* 线上环境 - xx
* Git - xx

## 准备

### 硬 / 软件

* 推荐使用 Mac（文档里的代码片段将不考虑 Windows），可以看 [入坑 Mac，看这一篇就够了](https://juejin.cn/post/7266452476379004980)
* 一个趁手的 IDE，推荐 [WebStorm](https://www.jetbrains.com/webstorm)，可以看 [入坑 WebStorm，看这一篇就够了](https://juejin.cn/post/7271184462934147135)
* 或者一个编辑器，比如 [VSCode](https://code.visualstudio.com)，可以看 [入坑 VSCode，看这一篇就够了](https://juejin.cn/post/7273435446587211812)
* 一个趁手的 Terminal，不要用原生的，推荐 [iTerm](https://iterm2.com) 或 [Warp](https://www.warp.dev)，可以看 [入坑 iTerm + OMZ，看这一篇就够了](https://juejin.cn/post/7267111166187012131)

### 全局依赖

你需要安装 `node≥23` 和 `pnpm≥10`：

```shell
brew install node # 推荐使用 brew 安装 node，若没有可以用别的方式
npm install -g pnpm
```

## 主应用的 Npm Scripts

:::tip[小技巧]
建议用 `pnpm` 运行，不需要写 `run`。若当前路径在某子目录下，加上参数 `-w` 即可，不需要切回根目录。
:::

| 名称 | 内容 | 说明 |
| --- | --- | --- |
| `preinstall` | `npx only-allow pnpm` | 生命周期，`pnpm install` 前自动执行，这里用于限制仅允许使用 Pnpm 作为包管理器 |
| `prepare` | `husky` | 生命周期，`pnpm install` 后自动执行，这里用于初始化 `husky` |
| `boot` | `pnpm clean && pnpm i` | 初始化项目 🚨 只要有依赖更新，就需要手动执行，因此你需要经常执行这个命令 |
| `boot:packages` | `pnpm -r prepublishOnly` | 构建 Workspace 下所有 package，本地开发包的时候必需 |
| `start` | `vite` | 本地开发 |
| `preview` | `vite preview` | Vite 本地预览构建结果 |
| `build` | `vite build` | Vite 打包构建 |
| `clean` | `rm -rf node_modules packages-*/*/node_modules` | 清理所有 `node_modules` 目录 |
| `lint` | `eslint packages*/**/src/ --ext js,ts,tsx` | 对主项目 `src` 执行 `eslint` |
| `lint:style` | `stylelint \"**/src/**/*.{css,less,ts,tsx}\"` | 对主项目 `src` 执行 `stylelint` |
| `lint:md` | `markdownlint-cli2 **/*.md !node_modules` | 对项目下所有 Markdown 文件执行 `markdownlint` |
| `ncu` | `ncu && pnpm ncu:packages` | 更新主项目和包的依赖 |
| `ncu:packages` | `pnpm -r exec ncu` | 更新包的依赖 |
| `depcheck` | `depcheck` | 检查主项目依赖项是否有缺失或多余 |
| `depcheck:packages` | `pnpm -r --no-bail exec depcheck` | 检查包的依赖项是否有缺失或多余 |

## Package 的 Npm Scripts

| 名称 | 内容 | 说明 |
| --- | --- | --- |
| `start` | `storybook dev -p 6006` | 运行 Storybook |
| `build:clean` | `rimraf dist` | 删除构建产物 |
| `build:esm` | `cross-env ESM=1 babel src -d dist/esm --extensions .ts,.tsx --source-maps` | 构建 ESM 产物到 `dist/esm` |
| `build:cjs` | `cross-env ESM=0 babel src -d dist/cjs --extensions .ts,.tsx` | 构建 CJS 产物到 `dist/esm` |
| `build:types` | `tsc -rootDir src --outDir dist/types --declaration --noEmit false --emitDeclarationOnly --isolatedModules false` | 构建类型产物到 `dist/types` |
| `build:sb` | `storybook build` | 构建 Storybook |
| `build` | `pnpm build:esm && pnpm build:cjs && pnpm build:types` | 构建 |
| `watch` | `pnpm build:esm -w` | 监测 `src` 下的改动，若有变化，则执行构建 ESM 的命令 |
| `prepublishOnly` | `pnpm build:clean && pnpm buil` | 声明周期，发包时自动执行所有的构建 |
