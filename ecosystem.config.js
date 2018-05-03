module.exports = {
    apps: [{
        name: 'storefront',
        script: 'npm',
        args: "storefront:start"
    }, {
        name: 'dashboard',
        script: 'npm',
        args: "dashboard:start"
    }],
    deploy: {
        production: {
            user: 'root',
            host: ['104.236.119.26'],
            ref: 'origin/master',
            repo: 'git@github.com:dangtienngoc/new24-frontend.git',
            path: '/var/www/html/new24',
            'post-deploy': 'npm install && npm run storefront:build && npm run dashboard:build && pm2 startOrRestart ecosystem.config.js'
        }
    }
}