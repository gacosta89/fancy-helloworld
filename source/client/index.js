import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from 'shared/app/reducer';
import configureRouter from 'shared/app/router';
import configureProvider from 'shared/app/provider';
import i18n from 'shared/app/i18n';

import 'normalize.css/normalize.css';

const iniState = window.BOOTSTRAP_CLIENT_STATE;

if (process.env.NODE_ENV === 'production') {
    const store = createStore(rootReducer, iniState);
    const history = syncHistoryWithStore(browserHistory, store);
    const Router = configureRouter(history);
    const Provider = configureProvider(store, i18n);

    ReactDOM.render(
        <Provider>
            <Router />
        </Provider>,
        document.getElementById('root')
    );
} else {
    const DevTools = require('client/dev/devTools').default;
    const { AppContainer } = require('react-hot-loader');
    const App = require('client/dev/app').default;
    const store = createStore(rootReducer, iniState, DevTools.instrument());
    const history = syncHistoryWithStore(browserHistory, store);

    ReactDOM.render(
        <AppContainer>
            <App history={ history } store={ store } i18n={i18n} />
        </AppContainer>,
        document.getElementById('root')
    );

    module.hot.accept('shared/app/reducer', () => {
        store.replaceReducer(require('shared/app/reducer'));
    });

    module.hot.accept('client/dev/app', () => {
        const NextApp = require('client/dev/app').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp history={ history } store={ store } />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
