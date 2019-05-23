import React from 'react';
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
import { Button, Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Divider, Icon } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;



const OrderSection = () => {
        return (
            <section>

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
                    <Input  placeholder="Client's Name" />
                </InputGroup>
                <Row>
                <Col md={24} lg={24} xl={24}><Button style={{ marginRight: 30 }}>Cancel <Icon type="delete" /></Button><Button>Send Order<Icon type="arrow-right" /></Button></Col>
                
                </Row>
            </Col>

            </section>
        )
}








export default OrderSection;

