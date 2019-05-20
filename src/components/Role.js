import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Button } from 'antd';


const Role = () => {
return ( <Row>
            <Col md={4} lg={4} xl={5}>
                Col
            </Col>
            <Col md={16} lg={16} xl={14}>
                <p>Whats up hey hey dude chooseRole</p>
                <Button type="primary" >
                    Primary
                </Button>
                <Button type="primary" >
                    Primary
                </Button>
            </Col>
            <Col md={4} lg={4} xl={5}>
                Col
            </Col>
</Row> )

}

export default Role;
