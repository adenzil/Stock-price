import React, { Component } from 'react';
import './App.css';
import Stock from './components/Stock.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            stocks : [
                {name : 'a', 'price': 10, 'change': 0},
                {name : 'b', 'price': 100, 'change': 0},
                {name : 'c', 'price': 60, 'change': 0},
                {name : 'd', 'price': 80, 'change': 0},
                {name : 'e', 'price': 20, 'change': 0},
                {name : 'f', 'price': 140, 'change': 0}
            ],
            market : false,
            marketinterval : 1000
        };

        this.randomprice = this.randomprice.bind(this);
    }

    randomprice() {
        if(this.state.market){
            clearInterval(this.state.marketservice);
            this.setState({'market':false})
        }else{
            var self = this;
            let randomValueRange = (min, max) => {return parseInt(Math.random()*(max-min) + min,10)};
            this.setState({'market':true})
            self.state.marketservice = setInterval(function(){
                self.state.stocks.map(stock => {
                    let random = randomValueRange(5,-5);
                    if(stock.price + stock.change + random >= 0)
                        stock.change += random;
                    return stock;
                })
                self.setState({'stocks':self.state.stocks})
            },this.state.marketinterval)
        }
    }

    render() {
        return (
            <div className="App">
                <table id="simple-board">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.stocks.map((stock,index) => <Stock key={index} stock={stock} />)}
                    </tbody>
                 </table>
                 <button id="startMarket" onClick={() => this.randomprice()}>{this.state.market ? 'Stop market':'Start market'}</button>
            </div>
        );
    }
}

export default App;
