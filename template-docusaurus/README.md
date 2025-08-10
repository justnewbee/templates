# Documentation

这是 MyProject 的文档，基于 [Docusaurus](https://docusaurus.io)，模板为 [《入坑 Docusaurus，看这一篇就够了》](https://juejin.cn/post/7518188007541489704) 的相关实战部分改造的基础模板。

## 关于此模板（可删除）

基于官方 `classic` + TypeScript 模板，增加或修改以下内容：

1. 修改 `package.json` 中的依赖版本号
2. 使用 SCSS，并在 `src/css` 下新增多个文件调校部分样式
3. 增加 [Mermaid](https://mermaid.js.org) 支持
4. 增加图片放大 [docusaurus-plugin-image-zoom](https://www.npmjs.com/package/docusaurus-plugin-image-zoom)
5. 增加本地搜索 [docusaurus-lunr-search](https://www.npmjs.com/package/docusaurus-lunr-search)
6. 增加提取 React 组件 Props 的命令 `generate:md-api`
7. 一些文档模板：React 组件、数据接口 API

## 如何使用此模板（可删除）

将 `template-docusaurus` 作为新的文档站基底，建议做如下修改：

* 全局替换 `MyOrg` → 组织名
* 全局替换 `MyProject` → 项目名
* 全局替换 `Dinosaurs are cool` → 项目 Slogan
* 替换 `docusaurus.config.ts` 的 `header-github-link` 下的 Git 地址，或删除此 `navbar` 子项
* 替换 `static/favicon.ico` 和 `static/logo.png`

## 本地运行

1. 安装依赖
2. 执行 `pnpm start`

## 部署

> 是项目具体情况而定。

## Credits

* Logo from [FlatIcon](https://www.flaticon.com/free-icon/book_19007760?term=book&page=1&position=72&origin=search&related_id=19007760)
