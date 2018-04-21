import React, { Component } from 'react';

class Stock extends Component {
    render() {
        return (
            <tr>
            	<td>{this.props.stock.name}</td>
            	<td>{this.props.stock.price + this.props.stock.change}</td>
            	<td>{this.props.stock.change} {this.props.stock.change > 0 ? 'up':this.props.stock.change < 0 ? 'down':''}</td>
            </tr>
        );
    }
}

export default Stock;
