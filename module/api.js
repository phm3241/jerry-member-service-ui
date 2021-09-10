import Axios from "axios";
import _config from "next/config";

const staticFolder = _config().publicRuntimeConfig.staticFolder;
const apiUrl = _config().publicRuntimeConfig.apiUrl;
const isProd = _config().publicRuntimeConfig.isProd;
const session = _config().publicRuntimeConfig.session;

// console.log(session);

const api = {
    get(path, params) {
        let url = apiUrl + path;
        let options = {
            method: "GET",
            url: url,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            params: params,
        };
        if (session) {
            options.headers["session"] = session;
        }
        return Axios.get(url, options);
    },
    getNone(path, params) {
        let url = path;
        let options = {
            method: "GET",
            url: url,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            params: params,
        };
        if (session) {
            options.headers["session"] = session;
        }
        return Axios.get(url, options);
    },
    post(path, params) {
        let url = apiUrl + path;
        let options = {
            url: url,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            data: params,
        };
        if (session) {
            options.headers["session"] = session;
        }
        return Axios(options);
    },
    put(path, params) {
        let url = apiUrl + path;
        let options = {
            url: url,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            data: params,
        };
        if (session) {
            options.headers["session"] = session;
        }
        return Axios(options);
    },
    patch(path, params) {
        let url = apiUrl + path;
        let options = {
            url: url,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            data: params,
        };
        if (session) {
            options.headers["session"] = session;
        }
        return Axios(options);
    },
    login(path, params) {
        let url = apiUrl + path;
        let options = {
            url: url,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            data: params,
        };
        if (session) {
            options.headers["session"] = session;
        }
        return Axios(options);
    },
    multipart(path, params) {
        let url = apiUrl + path;
        let options = {
            // url: url,
            // method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            // data: params,
        };
        if (session) {
            options.headers["session"] = session;
        }
        return Axios.post(url, params, options);
    },
    excels(path, params) {
        let url = "";
        console.log(params);
        if(params == undefined || params == null) {
            url = apiUrl + path;
        } else {
            url = apiUrl + path +"?m="+params;
        }
        location.href = url;
    },
    // multipart(path, params) {
    //     let url = apiUrl + path;
    //     let options = {
    //         url: url,
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Credentials": true,
    //             withCredentials: true,
    //             "session": " ",
    //         },
    //         data: params,
    //     };
    //     return Axios(options);
    // },
};
export default api;