import React from 'react';
import SearchBar from './Components/SearchBar';
import DataComp from './Components/DataComp';
import "./App.css";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: window.newDataStorageModel,
      sku: window.SKU
    }

    this.handler = this.handler.bind(this)
  }

  handler(newState){
    this.setState({
      data: newState.data,
      sku: newState.sku
    })
  }

  render(){
    return (
    <div className = "App">
      <section className = "SearchBar">
          <SearchBar placeholder = "Find a sneaker..." table = {this.table} handler = {this.handler}/>
      </section>
      <section className = "StockX">
        <DataComp data = {this.state.data} sku = {this.state.sku}/>
      </section>
    </div>
    )
  }
}

export default App