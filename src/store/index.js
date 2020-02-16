import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './root-reducer';

export const store = createStore(rootReducer, composeWithDevTools());

export default store;
