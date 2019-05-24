import React from 'react';
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
import { Icon, Card, Tabs, Col, Row } from 'antd';
import burgerImg from './img/img-bq-burger.jpg';
import friesImg from './img/img-bq-fries.jpg'
import onionImg from './img/img-bq-onion.jpg'
import sandwichImg from './img/img-bq-sandwich.jpg'
import blackImg from './img/img-bq-black.jpg'
import latteImg from './img/img-bq-latte.jpg'
import orangeImg from './img/img-bq-orange.jpg'
import waterImg from './img/img-bq-water.jpg'
import cokeImg from './img/img-bq-coke.jpg'

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
                     <img className="menu-img" src={burgerImg} alt="burger-img" />
                     Delicious burger delicious
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Fries" bordered={false}>
                     <img className="menu-img" src={friesImg} alt="fries-img" />
                     Delicious burger delicious
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Onion Rings" bordered={false}>
                     <img className="menu-img" src={onionImg} alt="onion-img" />
                     Delicious burger delicious
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
                     <img className="menu-img" src={sandwichImg} alt="sandwich-img" />
                     Delicious burger delicious
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
                     <img className="menu-img" src={blackImg} alt="black-img" />
                     Delicious burger delicious
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Latte" bordered={false}>
                     <img className="menu-img" src={latteImg} alt="latte-img" />
                     Delicious burger delicious
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Orange Juice" bordered={false}>
                     <img className="menu-img" src={orangeImg} alt="orange-img" />
                     Delicious burger delicious
        </Card>
               </Col>
            </Row>
            <Row gutter={16}>
               <Col span={8}>
                  <Card title="Water" bordered={false}>
                     <img className="menu-img" src={waterImg} alt="water-img" />
                     Delicious burger delicious
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Soda" bordered={false}>
                     <img className="menu-img" src={cokeImg} alt="coke-img" />
                     Delicious burger delicious
        </Card>
               </Col>
               <Col span={8}>
                  <Card title="Orange Juice" bordered={false}>

                  </Card>
               </Col>
            </Row>

         </TabPane>
      </Tabs>
   )

}

export default MenuContainer;


