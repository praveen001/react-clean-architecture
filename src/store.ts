import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { initialState } from './reducers';
import epicMiddleware, { rootEpic } from './epics';

const composeEnhancer = composeWithDevTools({
  name: 'React Clean Architecture'
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;