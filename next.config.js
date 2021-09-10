const isProd = process.env.NODE_ENV === "production";

module.exports = {
    assetPrefix: isProd ? "" : "",
    trailingSlash: true,
    publicRuntimeConfig: {
        isProd: isProd,
        staticFolder: isProd ? "" : "",
        apiUrl: isProd ? "http://localhost:8080" : "http://localhost:8080", // localhost
    },
};


