import Router from "next/router";
import Api from "../module/api";

const auth = {
    async checkLogin(pageUri, type = null) {
        var res = "";
        console.log("auth - checkLogin");

        Api.getNone("http://localhost:8080/checkLogin")
            .then((res) => {
                console.log("auth - res",res);
                res = res.data;
                if(res.data == "session null"){
                    // Router.push("/login");

                }
            }).catch((error) => {
                console.log("error");
                Router.push("/login");

            });


        return res;
    },
};
export default auth;
