/**
 * 所有路由 Path 的定义，`value` 到 `key` 的转换规则：
 *
 * 1. 路径中的 `/` 转为 `__`
 * 2. 路径中的 `-` 转为 `_`
 * 3. 路由参数，转为 `$XX`（参数原本的骆驼格式转成 `_` 链接）
 *
 * 比如：
 *
 * - `CHAT__$CHAT_ID: '/chat/:chatId'`
 */
export enum ERoutePath {
  ROOT = '/',
  SETTING = '/setting' // 设置
}
