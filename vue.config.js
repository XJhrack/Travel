const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
        	.set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('styles', resolve('src/assets/styles'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
					'^/api' : '/mock'
				}
            }
        }
    }
}