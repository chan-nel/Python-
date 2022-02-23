
module.exports = {
    // pages: {
    //     index: {
    //         entry: 'src/main.js',
    //     },
    // },
    lintOnSave: false,
    //开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/api': '' }, //将前缀转换为空串
                ws: true,//用于支持websocket
                changeOrigin: true //用于控制请求头中的host值
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/demo': '' },
                ws: true,//用于支持websocket
                changeOrigin: true //用于控制请求头中的host值
            }
        }
    },


}