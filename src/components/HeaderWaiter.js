import React from 'react';
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Button, Row, Col, Dropdown, Avatar } from 'antd';


const { Header } = Layout;

const menu = () => {
   return (
      <Menu>
         <Menu.Item key="0">
            <Link to="/">Change to Chef View</Link>
         </Menu.Item>
         <Menu.Item key="1">
            <Link to="/waiterlist">Change User</Link>
         </Menu.Item>
         <Menu.Item key="3">
            <Link to="/">Log out</Link>
         </Menu.Item>
      </Menu>
   )
};

const RenderMenu = () => {
   return (
      <Dropdown overlay={menu} trigger={['click']}>
         <a className="ant-dropdown-link" href="#">
            <Avatar size="large" icon="user" />   Robert E. Gordon <Icon type="down" />
         </a>
      </Dropdown>
   )
}


const HeaderWaiter = () => {
   return (
      <Header className="header-shadow" style={{ background: '#fff', padding: 0, position: 'fixed', zIndex: 1, width: '100%' }}>
         <Row>
            <Col className="center-col" xs={0} sm={0} md={1} lg={1} xl={1}>
            </Col>
            <Col className="center-col" xs={0} md={14} lg={14} xl={14}>
            </Col>
            <Col className="center-col" xs={0} md={2} lg={2} xl={2}>
               <Button type="primary"><Link to="/waiter-home">New Order</Link></Button>
            </Col>
            <Col className="center-col" xs={0} md={5} lg={5} xl={5}>
               <RenderMenu />
            </Col>
            <Col className="center-col" xs={0} md={2} lg={2} xl={2}>
            </Col>
         </Row>
      </Header>
   )

}

export default HeaderWaiter;