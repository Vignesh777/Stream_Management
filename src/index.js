import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import Thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(applyMiddleware(Thunk))
    );
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

//Client ID for Google OAuth: 432734347348-rsrj47v1n68m05pli3ospodkgj2icrv9.apps.googleusercontent.com