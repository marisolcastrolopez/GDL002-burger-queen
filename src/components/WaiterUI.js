import React from 'react';
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Button, Row, Col, Dropdown, Avatar } from 'antd';

const { Header, Sider, Content } = Layout;


const menu = () => {
  return (
      <Menu>
          <Menu.Item key="0">
            <Link to="/waiterlist">Change to Chef View</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/waiterlist">Change User</Link>
          </Menu.Item>
          <Menu.Item key="3">
          <Link to="/waiterlist">Log out</Link>
          </Menu.Item>
      </Menu>
  )
};

const RenderMenu = () => {
  return (
      <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
          <Avatar size="large" icon="user" />   Waiter Name <Icon type="down" />
          </a>
      </Dropdown>
  )
}



class WaiterUI extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="viewheight">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="plus-circle" />
              <span>New Order</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="clock-circle" />
              <span>Order Status</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="rollback" />
              <span>Past Orders</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row>
              <Col className="center-col" md={1} lg={1} xl={1}>
                <Icon
                  className="trigger svg-margin"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Col>
              <Col className="center-col" md={17} lg={17} xl={17}>
              
              </Col>
              <Col className="center-col" md={2} lg={2} xl={2}>
                <Button type="primary">New Order</Button>
              </Col>
              <Col className="center-col" md={4} lg={4} xl={4}>
              <RenderMenu />
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 20,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Col scroll={{ y: true }} md={12} lg={12} xl={12}>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/> <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
                <Button type="primary">New Order</Button>
                <br/>
              </Col>
              <Col md={12} lg={12} xl={12}>
                <Button type="primary">New Order</Button>
              </Col>
            </Content>
        </Layout>
      </Layout>
    );
  }
}


export default WaiterUI;