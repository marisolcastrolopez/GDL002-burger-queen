import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./css/styles.css";
import { Row, Col, Icon } from "antd";
import bgRole from "./img/bg-role4.jpg";
import logoImg from "./img/logo-img.png";
// import { Button } from 'antd';

// const { Footer } = Layout;

const Role = () => {
  return (
    <Fragment>
      <Col className="img-small" xs={24} sm={24} md={0} lg={0} xl={0}>
        <img src={bgRole} alt="bg-role-burger" />
      </Col>
      <Col className="img-big" xs={0} sm={0} md={24} lg={24} xl={24}>
        <img src={bgRole} alt="bg-role-burger" />
      </Col>
      <Row>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <p />
        </Col>
      </Row>
      <Row
        className="center-col pad-role"
        type="flex"
        justify="space-around"
        align="middle"
      >
        <Col xs={2} sm={2} md={7} lg={8} xl={8}>
          <p />
        </Col>
        <Col xs={20} sm={20} md={10} lg={8} xl={8}>
          <img className="logo-img" src={logoImg} alt="bg-role-burger" />
        </Col>
        <Col xs={2} sm={2} md={7} lg={8} xl={8}>
          <p />
        </Col>
      </Row>
      <Row type="flex">
        <Col className="center-col" xs={24} sm={24} md={24} lg={24} xl={24}>
          <br />
          <br />
          <span className="titles whiteTxt">Select your role</span>
        </Col>
      </Row>
      <br />
      <Row type="flex" justify="space-around" align="middle">
        <Col xs={0} sm={0} md={4} lg={4} xl={5} />
        <Col className="center-col" xs={24} sm={24} md={8} lg={8} xl={7}>
          <button className="btn-bg btn-text spacer whitelink">
            <Link className="btn-text" to="/waiterlist">
              Waiter
            </Link>
          </button>
        </Col>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <p />
        </Col>
        <Col className="center-col" xs={24} sm={24} md={8} lg={8} xl={7}>
          <button className="btn-bg btn-text spacer whitelink">
            <Link className="btn-text" to="/waiterlist">
              Chef
            </Link>
          </button>
        </Col>
        <Col xs={0} sm={0} md={4} lg={4} xl={5} />
      </Row>
      <Row>
        <Col
          className="center-col bg-footer"
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
        >
          <span className="med-text-size whiteTxt cantamaran-font">
            Made with <Icon type="heart" /> by{" "}
            <a
              style={{ color: "#fe8b51" }}
              href="https://github.com/marisolcastrolopez/gdl002-burger-queen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marisol Castro
            </a>{" "}
            2019
          </span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Role;
