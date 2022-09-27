const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use("/pizzas",
        createProxyMiddleware({
            target: "http://api:5000",
            changeOrigin: true
        })
    );
};