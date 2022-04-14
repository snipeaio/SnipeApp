export function DataRequestSG(sku){
    

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const request = new Request(`http://localhost:2020/sg?sku=${sku}`, requestOptions)

    async function getSizeData(){
        let response = await fetch(request);
        let result = await response.json();
        return result
    }

    return getSizeData();
}

export async function FilterSGData(unfilData){
    let sizes = Object.keys(window.newDataStorageModel);

    console.log(unfilData)
    let filData = unfilData["data"]["configurableProducts"]["edges"][0]["node"]["autoApprovedSizes"];

    for (let i = 0; i < filData.length; i++){
        let sizeData = filData[i]
        let size = sizeData['size']
        if (!sizes.includes(size)){
            continue
        }
        let highestBid = sizeData["minPrice"]["value"]["value"]
        let lowestAsk = sizeData["maxPrice"]["value"]["value"]

        let sizePriceData = {
            "highestBid" : highestBid,
            "lowestAsk"  : lowestAsk
        }

        window.newDataStorageModel[size]["sg"] = sizePriceData
    }

    return window.newDataStorageModel
}   
