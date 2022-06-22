import React from 'react';
import "./Styles/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { FindProductX, GetPricesX, FilterDataX, GetSkuX} from './StockXScraper';
import { FilterDataGoat, FindProductGoat, GetIDGoat } from './GoatScraper';
import { DataRequestSG, FilterSGData } from './SGScraper';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
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
    
    console.log("this is responseJSON",responseJSON)
    let firstProduct = responseJSON['Products'][0];
    window.product = firstProduct;
    console.log(firstProduct)
    
    let unfilteredXData = await GetPricesX(firstProduct)
    let [shoeFacts, multiSku] = GetSkuX(unfilteredXData);
    console.log(multiSku,shoeFacts)
    multiSku = multiSku.split('/')
    let sku = multiSku[multiSku.length - 1]
    let stockXPrices = await FilterDataX(unfilteredXData);
    
    //Goat code for calling functions that find product and find product data
    let goatJSON = await FindProductGoat(sku);
    console.log("here")
    console.log(goatJSON);
    let goatID = GetIDGoat(goatJSON);
    let goatXData = await FilterDataGoat(goatID)

    let sgData = await DataRequestSG(sku);
    let sgGoatXData = await FilterSGData(sgData);
    this.props.handler({data: sgGoatXData, sku: window.sku})
  }

  clearInput() {
    this.setState({value: ""})
  }

  render(){
    return (
      <div>        
        <section className = "search">
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
        </section>
      </div>
    )
  }
}

export default SearchBar