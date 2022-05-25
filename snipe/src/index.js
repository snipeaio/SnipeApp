import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

window.product = "s"

window.SKU = ""

window.newDataStorageModel = {
  '4' : {
    'stockx' : {
      highestBid : "n/a",
      lowestAsk : "n/a"
    },
    "goat": {
      highestBid : "n/a",
      lowestAsk : "n/a"
    },
    "sg": {
      highestBid: "n/a",
      lowestAsk: "n/a"
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

