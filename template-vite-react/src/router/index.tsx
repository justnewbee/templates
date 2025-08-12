import {
  Suspense,
  lazy
} from 'react';
import {
  createBrowserRouter
} from 'react-router';

import {
  ERoutePath
} from '@/enum';
import Error404 from '@/rcc/error-404';

import Root from './_root';
import RouteHome from './route-home';

const LazyRouteSetting = lazy(() => import('./route-setting'));

/**
 * react-router 提供了三种模式：
 *
 * 1. Declarative
 * 2. Data ← 我们采用的模式
 * 3. Framework
 *
 * 参考 https://reactrouter.com/start/modes
 */
export default createBrowserRouter([{
  path: ERoutePath.ROOT,
  Component: Root,
  children: [{
    index: true,
    Component: RouteHome
  }, {
    path: ERoutePath.SETTING,
    element: <Suspense><LazyRouteSetting /></Suspense>
  }, {
    path: '*',
    Component: Error404
  }]
}, {
  path: '*',
  Component: Error404
}]);
