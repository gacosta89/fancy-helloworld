var path = require('path');

const homeFolder = path.join(__dirname, '../');

module.exports = {
    name: 'Universal Monolithic Project',
    folders: {
        home: homeFolder,
        client: {
            static: path.join(homeFolder, 'build', 'client'),
        },
    },
    log: {
        params: false,
    },
    host: '0.0.0.0',
    port: '8080'
};
