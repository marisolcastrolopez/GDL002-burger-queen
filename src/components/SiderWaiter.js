import React from 'react';
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class SiderWaiter extends React.Component {
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
         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
               <Menu.Item key="1">
                  <Icon
                     className="trigger svg-margin"
                     type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                     onClick={this.toggle}
                  />
               </Menu.Item>
               <Menu.Item key="2">
                  <Icon type="plus-circle" />
                  <span>New Order</span>
               </Menu.Item>
               <Menu.Item key="3">
                  <Icon type="clock-circle" />
                  <span>Order Status</span>
               </Menu.Item>
               <Menu.Item key="4">
                  <Icon type="rollback" />
                  <span>Past Orders</span>
               </Menu.Item>
            </Menu>
         </Sider>
      )

   }
}

export default SiderWaiter;

