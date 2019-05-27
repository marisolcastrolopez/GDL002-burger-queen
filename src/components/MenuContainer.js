import React from 'react';
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
import Counter from './Counter'
import { Icon, Card, Tabs, Col, Row,  Button, Input, Select, InputNumber, DatePicker, AutoComplete, Cascader, Divider } from 'antd';
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
const InputGroup = Input.Group;
const Option = Select.Option;

const MenuContainer = () => {
   return (
      <Row>
      <Col md={16} lg={16} xl={16} className="menu-pad">
      <Tabs className="show-shadow" defaultActiveKey="1">
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
                  <Card className="card-shadow center-col" title="Hamburger" bordered={false}>
                     <img className="menu-img" src={burgerImg} alt="burger-img" />
                     <span>Grilled beef, topped with cheese and vegetables.</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$10.00</span></strong>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card className="card-shadow center-col" title="Fries" bordered={false}>
                     <img className="menu-img" src={friesImg} alt="fries-img" />
                     <span>Classical french fries made at moment.</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$5.00</span></strong>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card className="card-shadow center-col" title="Onion Rings" bordered={false}>
                     <img className="menu-img" src={onionImg} alt="onion-img" />
                     <span>Classic onion rings fried at moment.</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$5.00</span></strong>
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
                  <Card className="card-shadow center-col" title="Ham&Cheese Sandwich" bordered={false}>
                     <img className="menu-img" src={sandwichImg} alt="sandwich-img" />
                     <span>Delicious ham and cheese sandwich topped with vegetables.</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$10.00</span></strong>
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
               <Col span={8} style={{ marginBottom: 16 }}>
                  <Card className="card-shadow center-col" title="Black Coffee" bordered={false}>
                     <img className="menu-img" src={blackImg} alt="black-img" />
                     <span>American black coffee</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$5.00</span></strong>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card className="card-shadow center-col" title="Latte" bordered={false}>
                     <img className="menu-img" src={latteImg} alt="latte-img" />
                     <span>Latte coffee.</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$7.00</span></strong>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card className="card-shadow center-col" title="Orange Juice" bordered={false}>
                     <img className="menu-img" src={orangeImg} alt="orange-img" />
                     <span>Orange juice made at moment</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$7.00</span></strong>
                  </Card>
               </Col>
            </Row>
            <Row gutter={16}>
               <Col span={8} style={{ marginBottom: 16 }}>
                  <Card className="card-shadow center-col" title="Water" bordered={false}>
                     <img className="menu-img" src={waterImg} alt="water-img" />
                     <span>Bottled water</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$7.00</span></strong>
                  </Card>
               </Col>
               <Col span={8}>
                  <Card className="card-shadow center-col" title="Soda" bordered={false}>
                     <img className="menu-img" src={cokeImg} alt="coke-img" />
                     <span>Soda various flavors.</span>
                     <Counter/>
                     <br/>
                     <strong><span style={{ fontSize: 20 }}>$7.00</span></strong>
                  </Card>
               </Col>
               <Col span={8}>
               </Col>
               
            </Row>
         </TabPane>
      </Tabs>
      </Col>
      <Col className="boxShadows" md={8} lg={8} xl={8}>
                <span>Order N°</span><span>10000</span>
                <span>5/22/2019</span><span>    23:04</span>
                <br />
                <span>Waiter Name</span>
                <br />
                <br />
                <InputGroup compact>
                    <Select defaultValue="table01">
                        <Option value="table01">Table 01</Option>
                        <Option value="table02">Table 02</Option>
                        <Option value="table03">Table 03</Option>
                        <Option value="table04">Table 04</Option>
                        <Option value="deliver"><strong>Deliver</strong></Option>
                    </Select>
                    <Input  placeholder="Client's Name" style={{ width: '60%' }} />
                </InputGroup>
                <Row>
                <Col md={24} lg={24} xl={24}><Button style={{ marginRight: 30 }}>Cancel <Icon type="delete" /></Button><Button>Send Order<Icon type="arrow-right" /></Button></Col>
                
                </Row>
            </Col>
      </Row>
   )
}

export default MenuContainer;


