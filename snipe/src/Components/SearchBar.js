import React from 'react';
import "./Styles/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { FindProductX, GetPricesX, FilterDataX, GetSkuX} from './StockXScraper';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    //StockX code for calling functions that find product and find product data
    let responseJSON = await FindProductX(this.state.value)
    let firstProduct = responseJSON['Products'][0];
    console.log(firstProduct)
    window.product = firstProduct;
    let unfilteredData = await GetPricesX(firstProduct)
    console.log(unfilteredData)
    let sku = GetSkuX(unfilteredData);
    console.log(sku)
    let stockXPrices = FilterDataX(unfilteredData);
    console.log(stockXPrices)
    //Goat code for calling functions that find product and find product data

  }

  clearInput() {
    this.setState({value: ""})
  }

  render(){
    return (
    <div className = "search">
      <form onSubmit = {this.handleSubmit}>
        <div className = "searchInputs">
          <input type =  "text" placeholder = {this.props.placeholder} value ={this.state.value} onChange = {this.handleChange}/>
          <div className = "searchIcon">
            {this.state.value.length === 0 ? (
              <SearchIcon onClick = {this.handleSubmit}/>
             ) : (
              <CloseIcon id = "clearBtn" onClick = {this.clearInput}/>
             )}
          </div>
        </div>
        <div className = "dataResult"></div>
      </form>
    </div>
    )
  }
}

export default SearchBar