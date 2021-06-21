import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './common/component/App';
import reportWebVitals from './reportWebVitals';
import configStore from "./common/redux/configStore";
import {Provider} from "react-redux";

const store = configStore();

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(<Root/>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
