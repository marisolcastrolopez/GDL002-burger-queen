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
      orders: [],
      count: 0,
      size: 'large',
      countHamburger: 0,
      countFries: 0,
      countOnion: 0,
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


  handleDecrementHamburger = () => {
    this.setState({
      countHamburger: this.state.countHamburger - 1,
    });
  };

  handleIncrementHamburger = () => {
    this.setState({
      countHamburger: this.state.countHamburger + 1,
    });
  };

  handleDecrementFries = () => {
    this.setState({
      countFries: this.state.countFries - 1,
    });
  };

  handleIncrementFries = () => {
    this.setState({
      countFries: this.state.countFries + 1,
    });
  };

  handleDecrementOnion = () => {
    this.setState({
      countOnion: this.state.countOnion - 1,
    });
  };

  handleIncrementOnion = () => {
    this.setState({
      countOnion: this.state.countOnion + 1,
    });
  };

  cancelOrder = () => {
    this.setState({
      count: 0,
      countHamburger: 0,
      countFries: 0,
      countOnion: 0,
    });
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };



  render() {
    const { orders } = this.state;
    // const { dinner } = this.state.dinner;
    const { countHamburger } = this.state.countHamburger;
    const dish = require('./dinnerMenu.json')
    const size = this.state.size;
    const priceHamburger = this.state.countHamburger * 10
    const priceFries = this.state.countFries * 5
    const priceOnion = this.state.countOnion * 5
    const priceTotal = priceHamburger + priceFries + priceOnion
    return (
      <Row>
        <Col md={16} lg={16} xl={16} className="menu-pad">
          <Tabs className="show-shadow" defaultActiveKey="1">
            <TabPane
              tab={<span><i className="far fa-moon fa-lg"></i>Dinner</span>}key="1">
              <Row gutter={16}>
                <Col span={8} style={{ marginBottom: 16 }}>
                  <Card className="card-shadow center-col" title="Hamburger" bordered={false}>
                    <img className="menu-img" src={burgerImg} alt="burger-img" />
                    <span>Grilled beef, topped with cheese and vegetables.</span>
                    <br />
                    <br />
                    <Button size={size} onClick={this.handleDecrementHamburger}><span>-</span></Button>
                    <span className="lg-text-counter">      {this.state.countHamburger}      </span>
                    <Button size={size} onClick={this.handleIncrementHamburger}><span>+</span></Button>
                    <br />
                    <br />
                    <strong><span style={{ fontSize: 20 }}>$10.00</span></strong>
                  </Card>
                </Col>
                <Col span={8} style={{ marginBottom: 16 }}>
                  <Card className="card-shadow center-col" title="Fries" bordered={false}>
                    <img className="menu-img" src={friesImg} alt="fries-img" />
                    <span>Classical french fries made at moment.</span>
                    <br />
                    <br />
                    <Button size={size} onClick={this.handleDecrementFries}><span>-</span></Button>
                    <span className="lg-text-counter">      {this.state.countFries}      </span>
                    <Button size={size} onClick={this.handleIncrementFries}><span>+</span></Button>
                    <br />
                    <br />
                    <strong><span style={{ fontSize: 20 }}>$5.00</span></strong>
                  </Card>
                </Col>
                <Col span={8} style={{ marginBottom: 16 }}>
                  <Card className="card-shadow center-col" title="Onion Rings" bordered={false}>
                    <img className="menu-img" src={onionImg} alt="onion-img" />
                    <span>Classic onion rings fried at moment.</span>
                    <br />
                    <br />
                    <Button size={size} onClick={this.handleDecrementOnion}><span>-</span></Button>
                    <span className="lg-text-counter">      {this.state.countOnion}      </span>
                    <Button size={size} onClick={this.handleIncrementOnion}><span>+</span></Button>
                    <br />
                    <br />
                    <strong><span style={{ fontSize: 20 }}>$5.00</span></strong>
                  </Card>
                </Col>

                {/* <form onSubmit={this.handleSubmit}>
                  <h1>Add new team member here</h1>
                  <input type="hidden" ref="uid" />

                  <label>Name</label>
                  <input
                    type="text"
                    ref="title"
                    className="form-control"
                    placeholder="title"
                  />

                  <label>Quantity</label>
                  <input
                    type="text"
                    ref="qty"
                    className="form-control"
                    placeholder="Quantity"
                  />

                  <button type="submit" className="btn btn-primary">
                    Save
                        </button>
                </form>
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
                </div> */}
              </Row>
            </TabPane>
          </Tabs>
        </Col>
        <Col className="boxShadows" md={8} lg={8} xl={8}>
          <Row className="defaultInfo">
            <br />
            <Col md={24} lg={24} xl={24}>
              <h1><span>Order N°</span><span>10000</span></h1>
              <span>5/22/2019</span><span>    23:04</span>
              <span>  Waiter Name</span>
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
              <br />
            </Col>
          </Row>
          <Row className="HamburgerRow">
            <Col md={10} lg={10} xl={10}>
              <span className="lg-text-counter">{this.state.countHamburger}</span><span>    Hamburger</span>
            </Col>
            <Col md={8} lg={8} xl={8}>
              <Button onClick={this.handleDecrementHamburger}><span>-</span></Button>
              <span>      {this.state.countHamburger}      </span>
              <Button onClick={this.handleIncrementHamburger}><span>+</span></Button>
            </Col>
            <Col md={6} lg={6} xl={6}>
              <Icon style={{ fontSize: 20 }} type="delete" />
              <span className="md-text-counter">      ${priceHamburger}.00      </span>
            </Col>
          </Row>
          <Row className="FriesRow">
            <Col md={10} lg={10} xl={10}>
              <span className="lg-text-counter">{this.state.countFries}</span><span>    Fries</span>
            </Col>
            <Col md={8} lg={8} xl={8}>
              <Button onClick={this.handleDecrementFries}><span>-</span></Button>
              <span>      {this.state.countFries}      </span>
              <Button onClick={this.handleIncrementFries}><span>+</span></Button>
            </Col>
            <Col md={6} lg={6} xl={6}>
              <Icon style={{ fontSize: 20 }} type="delete" />
              <span className="md-text-counter">      ${priceFries}.00      </span>
            </Col>
          </Row>
          <Row className="OnionRow">
            <Col md={10} lg={10} xl={10}>
              <span className="lg-text-counter">{this.state.countOnion}</span><span>    Onion Rings</span>
            </Col>
            <Col md={8} lg={8} xl={8}>
              <Button onClick={this.handleDecrementOnion}><span>-</span></Button>
              <span>      {this.state.countOnion}      </span>
              <Button onClick={this.handleIncrementOnion}><span>+</span></Button>
            </Col>
            <Col md={6} lg={6} xl={6}>
              <Icon style={{ fontSize: 20 }} type="delete" />
              <span className="md-text-counter">      ${priceOnion}.00      </span>
            </Col>
          </Row>
          <Row>
            <Col md={24} lg={24} xl={24}><strong><p className="xl-text-counter">Total ${priceTotal}.00  </p></strong></Col>
            <br />
            <br />
            <Col md={24} lg={24} xl={24}><Button onClick={this.cancelOrder} style={{ marginRight: 30 }}>Cancel <Icon type="delete" /></Button><Button>Send Order<Icon type="arrow-right" /></Button></Col>

          </Row>

        </Col>
      </Row>
    );
  }
}

export default TakeOrder;


