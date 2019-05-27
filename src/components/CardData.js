import React from 'react';

import Firebase from 'firebase';
import config from './config';


class Test extends React.Component {
    constructor(props) {
      super(props);
      Firebase.initializeApp(config);
  
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
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h1>Firebase Development Team</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                {orders.map(order => (
                  <div
                    key={order.uid}
                    className="card float-left"
                    style={{ width: "18rem", marginRight: "1rem" }}
                  >
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
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <h1>Add new team member here</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <input type="hidden" ref="uid" />
                    <div className="form-group col-md-6">
                      <label>Name</label>
                      <input
                        type="text"
                        ref="title"
                        className="form-control"
                        placeholder="title"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Quantity</label>
                      <input
                        type="text"
                        ref="qty"
                        className="form-control"
                        placeholder="Quantity"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default Test;