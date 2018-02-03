import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import makeI18n from 'core/lib/app/i18n'
import App from 'core/lib/app/main'

import rootReducer from 'core/lib/app/reducer'

import 'normalize.css/normalize.css'
import resources from 'core/lib/static/locales/default.json'

const i18n = makeI18n(resources)

const iniState = window.BOOTSTRAP_CLIENT_STATE

if (process.env.NODE_ENV === 'production') {
    const store = createStore(rootReducer, iniState)
    const history = syncHistoryWithStore(browserHistory, store)

    ReactDOM.render(
        <App history={history} store={store} i18n={i18n} />,
        document.getElementById('root'),
    )
} else {
    const { AppContainer } = require('react-hot-loader')
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
            window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
    )
    const history = syncHistoryWithStore(browserHistory, store)

    ReactDOM.render(
        <AppContainer>
            <App history={history} store={store} i18n={i18n} />
        </AppContainer>,
        document.getElementById('root'),
    )

    module.hot.accept('core/lib/app/reducer', () => {
        store.replaceReducer(require('core/lib/app/reducer'))
    })

    module.hot.accept('core/lib/app/main', () => {
        const NextApp = require('core/lib/app/main').default

        ReactDOM.render(
            <AppContainer>
                <NextApp history={history} store={store} i18n={i18n} />
            </AppContainer>,
            document.getElementById('root'),
        )
    })
}
