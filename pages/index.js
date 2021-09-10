import _config from "next/config";
import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Table, Tag, Space, Row, Col, Input, Form, Select, Button, Pagination } from "antd";
import Auth from "../module/auth";
import Api from "../module/api";
import Side from "../component/side";
import Headers from "../component/header";

const staticFolder = _config().publicRuntimeConfig.staticFolder;


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;

export default class Home extends React.Component {
    formRef = React.createRef();
    _isMounted = false;
    _init = false;
    constructor(props) {
        super();
        this.state = {
            loginMember: '',
        };
    }
    async componentDidMount() {
        this._isMounted = true;

        this.state.loginMember = await Auth.checkLogin(false);
        this.setState(this.state);
        console.log("index- loginMember :", this.state.loginMember);
    }
    render() {
        return (
            <>
                <Layout>
                    <Headers></Headers>
                    <Layout>
                        <Side state={this.state}></Side>
                        <Layout style={{ padding: "0 24px 24px" }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    margin: 0,
                                    minHeight: "700px",
                                }}>

                                <div style={{ width: "600px", margin: "100px auto" }}>
                                    HOME - 로그인 성공
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </>
        );
    }
}
