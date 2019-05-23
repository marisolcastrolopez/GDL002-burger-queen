import React from 'react';
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
import { Layout, Button, Row, Col } from 'antd';
import SiderWaiter from './SiderWaiter'
import HeaderWaiter from './HeaderWaiter';
import MenuContainer from './MenuContainer'
import OrderSection from './OrderSection'

const { Content } = Layout;

const WaiterUI = () => {
   return (
      <Layout className="viewheight">
         <SiderWaiter />
         <Layout>
            <HeaderWaiter />
            <Content className="content-box">
               <Row>
                  <Col md={16} lg={16} xl={16} className="menu-pad">
                     <MenuContainer />
                  </Col>
                  <OrderSection/>
               </Row>
            </Content>
         </Layout>
      </Layout>
   );
}


export default WaiterUI;