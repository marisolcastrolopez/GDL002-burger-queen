import React from 'react';
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import './styles.css'
import { Row, Col } from "antd";
import bgRole from './bg-role.jpg';
// import logoImg from './logo-img.png' <img src={logoImg} alt="bg-role-burger" />
// import { Button } from 'antd';


const Role = () => {
	return (
		<section>
			<section id="bg">
				<img src={bgRole} alt="bg-role-burger" />
			</section>
			<Row>
				<Col className="center-col pad-role" md={24} lg={24} xl={24}>
					<br />
					<span className="titles whiteTxt">Select your role</span>
				</Col>
			</Row>
			<br />
			<Row>
				<Col md={4} lg={4} xl={5}>
				</Col>
				<Col className="center-col" md={8} lg={8} xl={7}>
					<button className="btn-bg btn-text spacer" >
						<Link className="btn-text" to="/waiterlist">Waiter</Link>
					</button>
				</Col>
				<Col className="center-col" md={8} lg={8} xl={7}>
					<button className="btn-bg btn-text spacer" >
						<Link className="btn-text" to="/waiterlist">Chef</Link>
					</button>
				</Col>
				<Col md={4} lg={4} xl={5}>
				</Col>
			</Row>
		</section>
	)

}

export default Role;
