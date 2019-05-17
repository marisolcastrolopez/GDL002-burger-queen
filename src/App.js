import React from 'react';
// import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { Row, Col } from "antd";

function App() {
  return (
    <Row>
      <Col md={4} lg={4} xl={5}>
        Col
      </Col>
      <Col md={16} lg={16} xl={14}>
        Col
      </Col>
      <Col md={4} lg={4} xl={5}>
        Col
      </Col>
    </Row>
  );
}

export default App;
