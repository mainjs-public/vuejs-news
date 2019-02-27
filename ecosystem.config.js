module.exports = {
    apps: [{
        name: 'storefront',
        script: 'nuxt',
        args: "start --config-file apps/home/nuxt.config.js -p=3002"
    }, {
        name: 'dashboard',
        script: 'nuxt',
        args: "start --config-file apps/dashboard/nuxt.config.js -p=3003"
    }],
    deploy: {
        production: {
            user: 'root',
            host: ['85.25.211.157'],
            ref: 'origin/master',
            repo: 'git@github.com:mainjs-public/vuejs-news.git',
            path: '/var/www/html/new24',
            'post-deploy': 'npm install && npm run storefront:build && npm run dashboard:build && pm2 startOrRestart ecosystem.config.js'
        }
    }
}