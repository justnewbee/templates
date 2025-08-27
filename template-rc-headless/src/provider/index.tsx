import {
  ReactElement,
  useRef,
  useReducer
} from 'react';

import {
  IModelProviderProps,
  TModelReducer
} from '../types';
import {
  createInitialState
} from '../util';
import reducer from '../reducer';
import Context from '../context';
import Lifecycle from '../lifecycle';

export default function Provider({
  children,
  ...props
}: IModelProviderProps): ReactElement {
  const refUnmounted = useRef(false);
  const [state, dispatch] = useReducer<TModelReducer, null>(reducer, null, createInitialState);
  
  return <Context.Provider value={{
    refUnmounted,
    props,
    state,
    dispatch
  }}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}
