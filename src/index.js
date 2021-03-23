import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store/index';
import Routes from './routes';
import Context from './context';

function Main() {
  const [data, setData] = useState('');

  return (
    <Provider store={store}>
      <Context.Provider value={{ data, setData }}>
        <Routes />
      </Context.Provider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
