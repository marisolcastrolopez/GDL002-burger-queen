import React from 'react';
import "antd/dist/antd.css";
import './css/styles.css'
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon } from 'antd';

const menu = () => {
    return (
        <Menu>
            <Menu.Item key="0">
                <Link to="/waiter-home">Robert E. Gordon</Link>
            </Menu.Item>
            <Menu.Item key="1">
                Michelle L. Arredondo
            </Menu.Item>
            <Menu.Item key="3">
                Victor L. Sinclair
            </Menu.Item>
            <Menu.Item key="4">
                Alfred P. Bailey
            </Menu.Item>
            <Menu.Item key="5">
                Linda L. Allison
            </Menu.Item>
            <Menu.Item key="6">
                Emily S. Taylor
            </Menu.Item>
            <Menu.Item key="7">
                Yvette T. Castleberry
            </Menu.Item>
        </Menu>
    )
};

const RenderMenu = () => {
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
                Click to search your name <Icon type="down" />
            </a>
        </Dropdown>
    )
}

const WaiterList = () => {
    return (
        <section>
        <section className="center-col pad-role">
            <span className="titles">Select your name</span>
            <br />
            <RenderMenu />
            <br/>
        </section>
        <section className="center-col pad-role">
             <button className="btn-bg btn-text" >
                <Link className="md-text-counter whitelink" to="/">Go Back</Link>
            </button>
        </section>
        </section>

    )
}

export default WaiterList;