---
title: Git 规范
---

## 用户信息

为了便于查看历史，需设置用户名和邮箱地址，以下是建议：

* `user.name`：全小写英文或拼音，名与姓之间用点号，如 `boshit.wang`，至于名在前姓在后就只能全靠自觉了
* `user.email`：使用公司邮箱

## 提交说明

Git 从最初的设计就要求每次提交（Commit）都必须带说明，以方便回顾和回滚。我们使用 [CommitLint](https://commitlint.js.org) 对提交信息（Commit Message）进行规范约束。

Commit Message 的基本组成如下：

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

其中 `type` 必需，用以表示当前提交的性质，有以下可选项：

* **chore:** 日常事务，多跟工程配置有关，比如升级版本号等
* **fix:** 修 BUG
* **feat:** 新功能
* **BREAKING CHANGE:** 有不兼容的改动，也可以在其他 type 后面加上 `!` 表示不兼容，比如 `feat!`
* **docs:** 文档修改
* **test:** 测试
* **refactor:** 重构

除了以上常用之外，还有一些不常用的：`build:`、`ci:`、`style:`、`perf:`。

更多内容，看 [Conventional Commits](https://www.conventionalcommits.org)。

## 分支命名

> 理论上，Git 分支可以是任何有效字符，支持中文，甚至都可以用「恶魔鸡」，但我们需要有相应的书写和命名约束。

默认 Git 只有一个常驻远程分支，也就是主分支。但也可能会有多个常驻分支，比如 `dev`、`test` 等。

其余都可认为是 **临时分支**，它们的宿命就是被最终合并到主分支，并消失在历史的长河中。

临时分支格式为 **类型/版本[-简述]**，仅允许小写字母和数字，连字符统一用 `-`，不允许大写，不允许其他特殊字符，不允许中文。

* **类型**：可以参考 Commit Message 的类型选项
* **版本号**：建议使用遵循 [Semver](https://semver.org) 规范的版本号
* **描述**：可选，建议不要超过 32 个字符

以下是类型的可选项，以及相关说明：

| 分支类型 | 作用 | 代码修改 | 升级版本号 | 举例 |
| --- | --- | --- | --- | --- |
| `feat` | 功能需求分支，新增、更新、移除某功能 | 视需求，代码量一般不会很少 | `minor` | `feat/1.1.0-add-user-management` |
| `fix` | Bug 修复分支，修复问题 | 代码量不多 | `patch` | `fix/1.1.1-user-display-name` |
| `chore` | 工程分支，与项目构建、编程规范等有关的 | 一般不涉及 `src` 下的代码 | `major` 或 `minor` | `chore/1.2.0-husky-and-friends` |
| `docs` | 文档分支，更新说明性的文档，README、CHANGELOG 等 | 仅 Markdown 文件 | `minor` 或 `patch` | `docs/1.3.0-standards-for-dev` |
| `test` | 测试分支，单元测试，Demo 等 | 不影响生产 | `minor` 或 `patch` | `test/1.4.0-util-fetcher` |
| `perf` | 性能分支，优化性能有关问题 | 不涉及业务逻辑 | `minor` 或 `patch` | `perf/1.4.1-user-list-scroll` |
| `refactor` | 重构分支，重构代码 | 不涉及业务逻辑，但容易出 Regression Bug | `minor` | `refactor/1.5.0-user-as-model` |