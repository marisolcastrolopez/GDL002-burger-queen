import React, { Component } from 'react'
import { Button } from 'antd';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            size: 'large',
        };
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };


    render() {
        const size = this.state.size;
        return (
            <div>
                <br/>
                <Button size={size} onClick={this.handleDecrement}><span>-</span></Button>
                <span className="lg-text-counter">      {this.state.count}      </span>
                <Button size={size} onClick={this.handleIncrement}><span>+</span></Button>
            </div>
        );
    };
};

export default Counter