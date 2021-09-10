import Link from "next/link";
import _config from "next/config";
import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Layout, Menu, Breadcrumb, Table, Tag, Space, Row, Col, Input, Form, Select, Button, Pagination } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";

const staticFolder = _config().publicRuntimeConfig.staticFolder;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;

const Side = (props) => {

    return (
        <>
            {/* {availablePages.map((item, key) => {
                return (
                    <div>
                        {item}
                        <br />
                    </div>
                );
            })} */}
            <Sider>
                <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
                        {/*<SubMenu key="sub1" icon={<UserOutlined />} title="회원관리">*/}
                        {/*    <Menu.Item key="1">*/}
                        {/*        <Link href="/users/list">*/}
                        {/*            <a href="/users/list">회원정보관리</a>*/}
                        {/*        </Link>*/}
                        {/*    </Menu.Item>*/}
                        {/*</SubMenu>*/}
                </Menu>
            </Sider>
        </>
    );
};

export default Side;