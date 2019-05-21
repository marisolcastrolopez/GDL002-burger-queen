import React from 'react';
import "antd/dist/antd.css";
import { Layout, Menu, Icon, Button, Row, Col } from 'antd';

const { Header, Sider, Content } = Layout;

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
              <Col className="center-col" md={19} lg={19} xl={19}>
                
              </Col>
              <Col className="center-col" md={2} lg={2} xl={2}>
                <Button type="primary">Primary</Button>
              </Col>
              <Col className="center-col" md={2} lg={2} xl={2}>
                None
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
            </Content>
        </Layout>
      </Layout>
    );
  }
}


export default WaiterUI;