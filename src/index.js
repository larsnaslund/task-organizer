import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// API call interception to mock the behavior of an API server
import { worker } from './mocks/api';
worker.start();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);