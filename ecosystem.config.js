module.exports = {
    apps: [{
        name: 'manager',
        script: 'npm',
        args: "dev"
    }],
    deploy: {
        production: {
            key: '/Users/dangtienngoc/ssh/new24.pem',
            user: 'root',
            host: ['62.75.244.96'],
            ref: 'origin/master',
            repo: 'git@github.com:dangtienngoc/new24-frontend.git',
            path: '/var/www/html/new24',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}