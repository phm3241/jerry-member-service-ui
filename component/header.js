import _config from "next/config";
import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Table, Tag, Space, Row, Col, Input, Form, Select, Button, Pagination } from "antd";
import Api from "../module/api";

const staticFolder = _config().publicRuntimeConfig.staticFolder;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;

const Headers = (props) => {
    const [login, setlogin] = useState(false);

    const logout = () => {
        var params = {};
        Api.postNone("http://localhost:8080/logout ", params)
            .then((response) => {
                console.log();
                Router.push("/login");
            })
            .catch((error) => {});
    };
    const loginCheck = () => {
        var params = {};
        Api.getNone("/checkLogin")
            .then((response) => {
                // console.log("check_login", response.data.data);
                location.href = "/";
                console.log("loginCheck : ", response);
            })
            .catch((error) => {
                console.log("error", error);
            });
    };

    useEffect(() => {
        loginCheck();
    }, []);

    return (
        <>
            <Header style={{ padding: "0 10px" }}>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">Member Service</Menu.Item>
                    {login && (
                        <Menu.Item
                            key="2"
                            onClick={() => {
                                // logout();
                            }}>
                            로그아웃
                        </Menu.Item>
                    )}
                </Menu>
            </Header>
        </>
    );
};

export default Headers;
