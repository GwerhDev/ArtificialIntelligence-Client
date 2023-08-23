import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './middlewares/redux/store'
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import App from './app/routes/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
);
