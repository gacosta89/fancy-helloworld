import { renderToString } from 'react-dom/server'
import { RouterContext } from 'react-router'

import configureProvider from 'core/lib/app/provider'
import makeI18n from 'core/lib/app/i18n'

import resources from 'core/lib/static/locales/default.json'

const i18n = makeI18n(resources)

export default React => (renderProps, store) => {
    const Provider = configureProvider(store, i18n)
    return renderToString(
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>,
    )
}
