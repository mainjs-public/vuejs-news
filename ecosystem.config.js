module.exports = {
    apps: [{
        name: 'storefront',
        script: 'nuxt',
        args: "start --config-file apps/home/nuxt.config.js -p=4000"
    }, {
        name: 'dashboard',
        script: 'nuxt',
        args: "start --config-file apps/dashboard/nuxt.config.js -p=2000"
    }],
    deploy: {
        production: {
            user: 'root',
            host: ['104.236.119.26'],
            ref: 'origin/master',
            repo: 'git@github.com:dangtienngoc/new24-frontend.git',
            path: '/var/www/html/new24',
            'post-deploy': 'pm2 startOrRestart ecosystem.config.js'
        }
    }
}