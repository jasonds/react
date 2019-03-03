import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Store } from "redux";
import { rootReducer } from './reducers/index';
import { IGlobalState } from './types/index';

import ReduxHello from './containers/ReduxHello';
import { Provider } from 'react-redux';
import App from './App';

const store: Store<IGlobalState> = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReduxHello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
