import React from 'react';
//import { GetPrices } from './StockXScraper';

class StockXComp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: this.props.data
        }

        this.colNames = ["Size","Highest Bid","Lowest Ask"];
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        })
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
                    {Object.values(this.state.data).map((obj, index) => (
                        <tr key = {index}>
                            {Object.values(obj).map((value1, index2) => (
                                <td key = {index2}>{value1}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default StockXComp