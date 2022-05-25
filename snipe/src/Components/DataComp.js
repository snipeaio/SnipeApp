import React from 'react';
//import { GetPrices } from './StockXScraper';

class DataComp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: this.props.data,
            sku: this.props.sku,
            sizeList: [4]
        }

        this.colNames = ["Size","X Highest Bid","X Lowest Ask", "G Highest Bid", "G Lowest Ask","SG Min","SG High"];
    }
    
    componentWillReceiveProps(nextProps) {
        
        let sizeList = Object.keys(nextProps.data).map(Number).sort(function(a, b) {
            return a - b;
        });
        this.setState({
            data: nextProps.data,
            sku: nextProps.sku,
            sizeList: sizeList
        });
    }

    render(){
        return(
            <table cellSpacing="0" style={{width: 'auto', height: 'auto', padding: '5px 10px'}}>
                <thead>
                    <tr>
                        {this.colNames.map((headerItem, index) => (
                            <th key={index}>
                                {headerItem.toUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.state.sizeList.map((size, index) => (
                        <tr key = {index}>
                            <td key = {size}>{size}</td>
                            {Object.keys(this.state.data[size.toString()]).map((market, index2) => (   
                                Object.keys(this.state.data[size.toString()][market]).map((price, index3) => (
                                    <td key={index + index2 + index3}>{this.state.data[size.toString()][market][price]}</td>
                                ))
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default DataComp