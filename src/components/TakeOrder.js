import React from 'react';
import "antd/dist/antd.css";
// import { Link } from "react-router-dom";
import Counter from './Counter'
import { Icon, Card, Tabs, Col, Row, Button, Input, Select, InputNumber, DatePicker, AutoComplete, Cascader, Divider } from 'antd';
import Firebase from 'firebase';
import config from './config';
import burgerImg from './img/img-bq-burger.jpg';
import friesImg from './img/img-bq-fries.jpg'
import onionImg from './img/img-bq-onion.jpg'
import sandwichImg from './img/img-bq-sandwich.jpg'
import blackImg from './img/img-bq-black.jpg'
import latteImg from './img/img-bq-latte.jpg'
import orangeImg from './img/img-bq-orange.jpg'
import waterImg from './img/img-bq-water.jpg'
import cokeImg from './img/img-bq-coke.jpg'
import menu from './dinnerMenu.json'

const TabPane = Tabs.TabPane;
const InputGroup = Input.Group;
const Option = Select.Option;


class TakeOrder extends React.Component {
  constructor(props) {
    super(props);

    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    }

    this.state = {
      orders: []
    };
  }


  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("orders")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("orders");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let title = this.refs.title.value;
    let qty = this.refs.qty.value;
    let uid = this.refs.uid.value;

    if (uid && title && qty) {
      const { orders } = this.state;
      const devIndex = orders.findIndex(data => {
        return data.uid === uid;
      });
      orders[devIndex].title = title;
      orders[devIndex].qty = qty;
      this.setState({ orders });
    } else if (title && qty) {
      const uid = new Date().getTime().toString();
      const { orders } = this.state;
      orders.push({ uid, title, qty });
      this.setState({ orders });
    }

    this.refs.title.value = "";
    this.refs.qty.value = "";
    this.refs.uid.value = "";
  };

  removeData = order => {
    const { orders } = this.state;
    const newState = orders.filter(data => {
      return data.uid !== order.uid;
    });
    this.setState({ orders: newState });
  };

  updateData = order => {
    this.refs.uid.value = order.uid;
    this.refs.title.value = order.title;
    this.refs.qty.value = order.qty;
  };

  render() {
    const { orders } = this.state;
    const { dinner } = this.state.orders;
    const menu = require('./dinnerMenu.json')
    return (
      <React.Fragment>
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
                  {menu.dinnerMenu.map((dish, index) => (
                      <Col span={8} style={{ marginBottom: 16 }}>
                        
                        <Card key={index} className="card-shadow center-col" title={dish.dish} bordered={false}>
                          <img className="menu-img" src={require(`${dish.img}`)} alt="" />
                          <span>{dish.description}</span>
                          <Counter />
                          <br />
                          <strong><span style={{ fontSize: 20 }}>{`$${dish.price}.00`}</span></strong>
                          <br />
                          <button type="submit">Add</button>
                        </Card>
                      <form onSubmit={this.handleSubmit}>
                      <h1>Add new team member here</h1>
                          <input type="hidden" ref="uid" />
                          <div>
                            <label>Name</label>
                            <input
                              type="text"
                              ref="title"
                              className="form-control"
                              placeholder="title"
                            />
                          </div>
                          <div>
                            <label>Quantity</label>
                            <input
                              type="text"
                              ref="qty"
                              className="form-control"
                              placeholder="Quantity"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </form>
                      </Col>  
                  ))}
                 
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
              <Input placeholder="Client's Name" style={{ width: '60%' }} />
            </InputGroup>
            <Row>
              <Col md={24} lg={24} xl={24}><Button style={{ marginRight: 30 }}>Cancel <Icon type="delete" /></Button><Button>Send Order<Icon type="arrow-right" /></Button></Col>
              <Col md={24} lg={24} xl={24}>
                <div className="container">
                  <h1>Firebase Development Team</h1>
                  <div>
                    {orders.map((order) => (
                      <div className="card-body">
                        <h5 className="card-title">{order.title}</h5>
                        <p className="card-text">{order.qty}</p>
                        <button
                          onClick={() => this.removeData(order)}
                          className="btn btn-link"
                        >
                          Delete
                     </button>
                        <button
                          onClick={() => this.updateData(order)}
                          className="btn btn-link"
                        >
                          Edit
                     </button>
                      </div>
                    ))}

                  </div>
              
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TakeOrder;


