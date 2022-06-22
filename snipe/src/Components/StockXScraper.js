export function FindProductX(userSearch){
    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
    };
    const request = new Request(`http://localhost:2020/sx-product-search?usersearch=${userSearch}`, requestOptions)

    async function getData(){
        let response = await fetch(request);
        let result = await response.json();
        
        return result;
    }

    return getData();
}

export function GetPricesX(productJSON){
    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
    };
    let urlkey = productJSON['urlKey']
    const request = new Request(`http://localhost:2020/sx?urlkey=${urlkey}`, requestOptions)
    
    async function getPrices(){
        let response = await fetch(request);
        let result = await response.json();
        return result
    }

    return getPrices();
}

export function FilterDataX(data){
    let unfilPrices = data['data']['product']['variants'];
    console.log(unfilPrices)
    let sizesAdded = [];
    
    for (let i = 0; i < unfilPrices.length; i++){
        let size = unfilPrices[i]['sizeChart']['baseSize'];
        let hidden = unfilPrices[i]['hidden']
        let highestBid = unfilPrices[i]['market']['bidAskData']["highestBid"];
        let lowestAsk = unfilPrices[i]['market']['bidAskData']["lowestAsk"];
        
        if (!sizesAdded.includes(size)){
            window.newDataStorageModel[size]= {}
            window.newDataStorageModel[size]['stockx'] = {
                "highestBid" : ((!hidden && highestBid != null) ? highestBid : "n/a"),
                "lowestAsk"  : ((!hidden && lowestAsk != null) ? lowestAsk : "n/a")
            }
            sizesAdded.push(size)
        }

    }

    return window.newDataStorageModel
}

export function GetSkuX(unfilteredData){
    let shoeFacts = unfilteredData['data']['product']['traits']
    let sku = unfilteredData['data']['product']['styleId'];

    return [shoeFacts,sku];
}
