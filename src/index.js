import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import OvermindCounter from "./overmind/OvermindCounter";
import {overmind} from './overmind/States'
import {Provider} from 'overmind-react'

ReactDOM.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <div>
                <h1>Overmind</h1>
                <OvermindCounter/>
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
