import i18n from 'i18next'

const makeI18n = resources => {
    i18n.init({
        lng: 'en',
        resources,
    })

    return i18n
}

export default makeI18n
