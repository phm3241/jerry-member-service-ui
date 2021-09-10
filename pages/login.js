import _config from "next/config";
import React, { useState, useEffect } from "react";
import { Layout, Menu, Checkbox, Table, Tag, Space, Row, Col, Input, Form, Select, Button, Pagination } from "antd";
import Api from "../module/api";

const staticFolder = _config().publicRuntimeConfig.staticFolder;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Home = ({ login }) => {
    // console.log(login);
    const onFinish = (values) => {
        console.log("Success:", values);
        var params = encodeURIComponent(JSON.stringify(values));
        var params = `id=${values.id}&pw=${values.pw}`;
        console.log(params);
        Api.getNone("http://localhost:8080/login", values)
            .then((response) => {
                // if (response.data.data.result == "ok") {
                if(response.data !== 'session null') {
                    console.log("로그인 성공 : ", response);
                    location.href = "/";
                }
                // } else {
                //     alert(response.data.data.message);
                // }
            })
            .catch((error) => {
                alert(error);
            });
    };

    const loginCheck = () => {
        var params = {};
        Api.getNone("http://localhost:8080/checkLogin")
            .then((response) => {
                // console.log("check_login", response.data.data);
                if(response.data !== 'session null') {
                    console.log("로그인 페이지 - 로그인체크 성공 : ", response);
                    location.href = "/";
                }

            })
            .catch((error) => {
                console.log("error", error);
                // location.href = "/login";
            });
    };

    useEffect(() => {
        loginCheck();
    }, []);

    return (
        <>
            <Layout>
                <Header style={{ padding: "0 10px" }}>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1">Member Service</Menu.Item>
                         <Menu.Item key="2">로그아웃</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: 0,
                                minHeight: "700px",
                            }}>
                            <div style={{ width: "600px", margin: "100px auto" }}>
                                <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
                                    <Form.Item label="id" name="id" rules={[{ required: true, message: "id를 입력해 주세요." }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="pw" name="pw" rules={[{ required: true, message: "비밀번호를 입력해 주세요." }]}>
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit">
                                            로그인
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default Home;
