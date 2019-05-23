import React from 'react';
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
import { Icon, Card, Tabs, Col, Row } from 'antd';

const { Meta } = Card;
const TabPane = Tabs.TabPane;

const MenuContainer = () => {
   return (
      <Tabs defaultActiveKey="1">
         <TabPane
            tab={
               <span>
                  <i className="far fa-moon fa-lg"></i>
                  Dinner
              </span>
            }
            key="1"

         >
            <Row gutter={16}>
               <Col span={8}>
                  <Card title="Hamburger" bordered={false}>
                     Card content
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Fries" bordered={false}>
                     Card content
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Onion Rings" bordered={false}>
                     Card content
        </Card>
               </Col>
            </Row>

         </TabPane>
         <TabPane
            tab={
               <span>
                  <i className="far fa-sun fa-lg"></i>
                  Breakfast
              </span>
            }
            key="2"
         >
            <Row gutter={16}>
               <Col span={8}>
                  <Card title="Ham&Cheese Sandwich" bordered={false}>
                     Card content
        </Card>
               </Col>
               <Col span={8}>

               </Col>
               <Col span={8}>

               </Col>
            </Row>
         </TabPane>
         <TabPane
            tab={
               <span>
                  <i className="fas fa-cocktail fa-lg"></i>
                  Beverages
              </span>
            }
            key="3"

         >
           <Row gutter={16}>
               <Col span={8}>
                  <Card title="Black Coffee" bordered={false}>
                     Card content
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Latte" bordered={false}>
                     Card content
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Orange Juice" bordered={false}>
                     Card content
        </Card>
               </Col>
            </Row>
            <Row gutter={16}>
               <Col span={8}>
                  <Card title="Water" bordered={false}>
                     Card content
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Soda" bordered={false}>
                     Card content
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Orange Juice" bordered={false}>
                     Card content
        </Card>
               </Col>
            </Row>

         </TabPane>
      </Tabs>
   )

}

export default MenuContainer;


