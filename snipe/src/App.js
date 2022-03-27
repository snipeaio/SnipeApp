import React from 'react';
import SearchBar from './Components/SearchBar';
import StockXComp from './Components/StockXPrices';
import "./App.css";

class App extends React.Component {

  render(){
    return (
    <div className = "App">
      <section className = "SearchBar">
          <SearchBar placeholder = "Enter a SKU"/>
      </section>
      <section className = "StockX">
        <StockXComp />
      </section>
    </div>
    )
  }
}

export default App