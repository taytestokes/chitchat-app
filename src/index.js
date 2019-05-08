import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//BrowserRouter for routing
import {BrowserRouter} from 'react-router-dom';
//Redux
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));