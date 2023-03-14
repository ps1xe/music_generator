import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore,  compose } from 'redux';
import { rootReducer } from './redux/reducers/root.reducer';
import rootSaga from './redux/sagas/index';
import { Provider } from 'react-redux';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(rootSaga);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
