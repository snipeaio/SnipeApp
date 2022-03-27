import React from 'react';
//import { GetPrices } from './StockXScraper';

class StockXComp extends React.Component{
    constructor(props){
        super(props);
        this.product = window.product;

       // this.GetPrices = this.GetPrices.bind(this);
    }
    
    render(){
        return(
            <h1>Stockx</h1>
        )
    }
}

export default StockXComp