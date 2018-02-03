module.exports = {
    apps: [
        {
            name: 'SERVER',
            script: './packages/static-server/build/index.js',
            env: {
                NODE_ENV: 'production',
                NODE_CONFIG_DIR: './config',
            },
        },
    ],
}
