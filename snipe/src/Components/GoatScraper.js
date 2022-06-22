export function FindProductGoat(sku){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const request = new Request(`https://ac.cnstrc.com/search/${sku}?key=key_XT7bjdbvjgECO5d8`,requestOptions)

    async function getSearchData(){
        let response = await fetch(request);
        let result = await response.json();
        return result;
    }

    return getSearchData()
}

export function GetIDGoat(goatJSON){
    let id = goatJSON.response.results[0].data.id;
    return id
}

export function SizeDataRequestGoat(goatID,size){
    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
    };

    const request = new Request(`http://localhost:2020/goat?size=${size}&name=${goatID}`, requestOptions)
    
    async function getSizeData(){
        let response = await fetch(request);
        let result = await response.json();
        return result
    }

    return getSizeData();
}


export async function FilterDataGoat(goatID){
    let sizes = Object.keys(window.newDataStorageModel);
    
    for(let i = 0; i < sizes.length; i++){
        let unfilData = await SizeDataRequestGoat(goatID,sizes[i]);

        var highestBid;
        var lowestAsk;
        try{
            highestBid = unfilData["highestOfferCents"]["amount"]/100
            lowestAsk = unfilData["lowestPriceCents"]["amount"]/100
        } catch (error){
            highestBid = "n/a"
            lowestAsk = "n/a"
        }

        if (isNaN(highestBid)){
            highestBid = "n/a"
        } 
        if (isNaN(lowestAsk)){
            lowestAsk = "n/a"
        } 

        let sizePriceData = {
            "highestBid" : highestBid,
            "lowestAsk"  : lowestAsk
        }
        window.newDataStorageModel[sizes[i]]['goat'] = sizePriceData;
    }
    return window.newDataStorageModel
}

