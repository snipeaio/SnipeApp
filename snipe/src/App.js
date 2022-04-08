import React from 'react';
import SearchBar from './Components/SearchBar';
import StockXComp from './Components/StockXComp';
import "./App.css";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: window.stockXPrices
    }

    this.handler = this.handler.bind(this)
  }

  handler(newState){
    this.setState({
      data: newState
    })
  }

  render(){
    return (
    <div className = "App">
      <section className = "SearchBar">
          <SearchBar placeholder = "Enter a SKU" table = {this.table} handler = {this.handler}/>
      </section>
      <section className = "StockX">
        <StockXComp data = {this.state.data}/>
      </section>
    </div>
    )
  }
}

export default App