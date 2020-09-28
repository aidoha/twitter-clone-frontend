import { createStore } from 'redux';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

function reducer(): void {}

export const store = createStore(reducer, composeEnhancers);
