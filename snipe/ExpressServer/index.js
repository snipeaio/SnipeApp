const express = require('express');
var request = require('request');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const app = express();

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/checkno', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/sg', (req,res) => {
    let sku = req.query.sku;
    request.post(
        {
            url:"https://sellers.stadiumgoods.com/graphql",
            headers: {
                'authority': 'sellers.stadiumgoods.com',
                'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
                'content-type': 'application/json',
                'sec-ch-ua-mobile': '?0',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
                'x-api-key': 'ef2e1c5ca3cf3b729c7a1c05666a0e062aca2090a8a5ab5b42f700aac4a9654e',
                'sec-ch-ua-platform': '"Windows"',
                'accept': '*/*',
                'origin': 'https://sellers.stadiumgoods.com',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-mode': 'cors',
                'sec-fetch-dest': 'empty',
                'referer': 'https://sellers.stadiumgoods.com/sellers/tickets/new',
                'accept-language': 'en-US,en;q=0.9',
                'cookie': '_dy_c_exps=; ku1-sid=0IBeAc7u1LGvbRpwIXrT2; ku1-vid=6d68eeb0-a6e2-45f7-5cde-ecad7b522f85; _gcl_au=1.1.1985148675.1648441313; _dycnst=dg; __troRUID=ae6eb77d-c43d-4888-b94b-121f8085e899; _ga=GA1.2.1239474500.1648441320; _dyfs=1648441322332; _dy_df_geo=United%20States.Maryland.College%20Park; _dy_geo=US.NA.US_MD.US_MD_College%20Park; _scid=f9e5e919-ec20-4b50-9ca8-e4f93cc8dca1; rskxRunCookie=0; rCookie=3sk3egs1e0kt37vcejvxlfl1a7ejg9; _pin_unauth=dWlkPVlqY3lORGhtTlRBdE9UQTJZUzAwT1RneExUZzFNRFl0WkRGaE9EWTVaR00zTTJSag; _dyjsession=y6dix2jdapcd4uq4f9nntdpsieos2dh9; _dy_c_att_exps=; _gid=GA1.2.1503279733.1649907905; _dyid=7142709216816478180; _dycmc=1; __troSYNC=1; _hjSessionUser_2316831=eyJpZCI6IjE1MGMwY2Q3LTAxMjUtNTUzZS1hNDZlLWNhMDJhY2Q5OTllZSIsImNyZWF0ZWQiOjE2NDg0NDEzMzA2OTIsImV4aXN0aW5nIjp0cnVlfQ==; _hjSession_2316831=eyJpZCI6IjE3OWM2ZGUzLWNjOTQtNGY0YS1iZjUyLTUwZTIzNjJkNGMzOCIsImNyZWF0ZWQiOjE2NDk5MDc5MDYwNDMsImluU2FtcGxlIjp0cnVlfQ==; _clck=1jy630e|1|f0m|0; dy_fs_page=sellers.stadiumgoods.com; _dycst=dk.w.c.ws.; _hjFirstSeen=1; _hjSession_1502515=eyJpZCI6IjI3YmNjY2MzLTNkMzAtNDY4Ny1hMTU1LTg3YzJmZDJkY2QyOCIsImNyZWF0ZWQiOjE2NDk5MDc5MDkwODIsImluU2FtcGxlIjpmYWxzZX0=; _hjIncludedInSessionSample=0; _hjSession_1502532=eyJpZCI6IjZkYzM5Mjg5LTk5NWQtNDRiOS04ZmU3LWQ0Y2Y2NjkzNmE1ZCIsImNyZWF0ZWQiOjE2NDk5MDc5MjE1NjQsImluU2FtcGxlIjpmYWxzZX0=; _hjIncludedInPageviewSample=1; _hjSessionUser_1502515=eyJpZCI6IjgyYmE5Yjg4LTRlYTgtNThkOS1iM2JmLTY0YTVhMzg0ZTAzOSIsImNyZWF0ZWQiOjE2NDk5MDc5MDg4NTIsImV4aXN0aW5nIjp0cnVlfQ==; was_signed_in=true; _hjSessionUser_1502532=eyJpZCI6Ijg2ZjUxMWQyLWY5NzktNWJiMS05ZjJlLTM2ODU5ODY3NWFlMyIsImNyZWF0ZWQiOjE2NDk5MDc5MjEzNjksImV4aXN0aW5nIjp0cnVlfQ==; _dy_toffset=-2; stc117388=env:1649907905%7C20220515034505%7C20220414042035%7C2%7C1068830:20230414035035|uid:1648441321860.1464307178.489285.117388.269821052.3:20230414035035|srchist:1068830%3A1649907905%3A20220515034505:20230414035035|tsa:1649907905759.666481543.9899449.6075682007290844.6:20220414042035; _uetsid=45d9d250bba511ec923d8ffff43bb825; _uetvid=9bf50790ae4e11ec9fa9610ebb20324b; lastRskxRun=1649908236040; mp_stadium_goods_mixpanel=%7B%22distinct_id%22%3A%20%2217fcec27f28361-03f99ae4dfbe7d-9771a3f-144000-17fcec27f29a76%22%2C%22bc_persist_updated%22%3A%201648441512179%2C%22country%22%3A%20%22us%22%7D; forterToken=5bf8f42dea8a409d97094fac7f572577_1649908235560__UDF43_11ck; cto_bundle=Z-rAml9TR3RITyUyQnN5cXhFTk1tNXZWZGNHcDN1SkElMkZ3NGZmVjJPMiUyRjZBZDJIQWtiVlhBYnhnJTJCN2hmbHFycDA3ZGNBZDFXa2RZYUVnbWJucm90eXZ0b2dBNWhtWU1mY3BJODZseklaM2lWMjlCU3RYQWpqblE5SVpVMFVRRDhUUlJOV3FHVlRxZGUxcTcwOWFmemRsMTh5M2VoUSUzRCUzRA; _clsk=1rhg8r5|1649908236907|2|1|e.clarity.ms/collect; _sctr=1|1649822400000; __trossion=1648441318_1800_2_ae6eb77d-c43d-4888-b94b-121f8085e899%3A1648441318_ae6eb77d-c43d-4888-b94b-121f8085e899%3A1649907905_1649908238_3_; _dy_csc_ses=t; _gat_UA-61113331-2=1; _dy_ses_load_seq=8555%3A1649909296405; _dy_soct=598595.1153932.1649908241*650640.1253101.1649908241*595453.1146547.1649909296; _dy_lu_ses=y6dix2jdapcd4uq4f9nntdpsieos2dh9%3A1649909296923; __cf_bm=X_h2HoHS7_j9TQlNZcFy_256qh3pMbE5nnO0P8lnz44-1649909295-0-AVwrfQgUgIy/rdmfgS4qldyXJ2HTatPs4O2PLzwETq4hvTO0klC32zleqwIgjqwEyt0qvQZnljzAwF+a440CnLskMcpbfu7UoCs+EOzBF9MQNnMTN3tyfbHYgYargob7Dm5SFV/R7lu7ukXO7VD4sbXRQBUzJx3FkDjU3CfocKCG0wtLMcitETv8esJ3hvMZJQ==; _hjAbsoluteSessionInProgress=0; _stadium_goods_session=Pm6xe4xcmCb9H4QQ3YdfFsWdemeC7ZXoHWrMOhkjXZJ0pOicTXKiq2UP7owQLkTGYkN78ZX3LMGkGVdZFmw5J2u5L0aUGPvATodMCbY9huH%2BVnKuUKlI8I4mwUUBfFIb80Tkmb0SuwftFCU%2BXRR8W313SwDD%2Bikx5Y%2F8BTlA5IOorT5zNdf6WeUSLC47d3styfNsdfWgbv4ScZVh%2BzU1xoGwMzkzISw3NfHCaioUvSq0Ui5mw3QgDSNT4L3SwiFAmQabf459Q5vA18XV3CpGoYfRpyOQ2nYXBOvRvQKZhmsD%2ByCKy%2F0zj6q%2Bl00Bxm4EsyFscLnq0jOkT9D1cMxbT3jDEkOb6fHfNWcKfFDwV%2BZBzQ8Cb9rWgXL7MghHaCtpqj6gfgcJZYs7sqOYthMQwFTY0e8OeQ%3D%3D--0aHvGhWweLF1IzjS--KdudxqZ4Xarm0DJdMULQuA%3D%3D; __cid=LytvwRbrLF9zatKdMLUVjfMbDHFdPvFnEVEjegFQNio11ij5cn02TwJuJT0CVGd4bw_h3UVVWukQWHd2Ei9MCF8_UhN-PElVJ34YWjoHQRR2P18JMh58WiNgBkopcH8TfGYcQTIoHk47cGkKYjxNLXcyYxNmfx1JJX4bTDJ4YzJGHWRWMjxBEXdwbx9xO0dTMhNACH09TVUraQZKPGQQTiZ-EE4yA0kccyJBVSdjH1QhZkRyJWEcT3BjSUJlUy_xEsQgT3AzS092NB7mcBFmPV4VCFJVP0cdfjUEWkQlRBFzPghLPGIGSjJ4ew17NlwpejFMH2BwbB9kOUsfMnh7D3AqTQh9eQhSIigYSiJga0pWFQFTPnB7DXs2XCl6MUwfYHBMCHsmTQg_ZQZKPGAB3gRhGlUhYQdLK2YRVjJnEkoiahhKMgBl1RpQnVvX5rWxEoMpp5EGz3r5U983fVQMB-1SYLIS_yjC1ucoehLnKLIS8Ua-EugotBLqSsBwBHw6eFAoehIQaDpSq9MVTD92E3f4gCJKFm2oajx9eBNQOHoSViiF; __cf_bm=D6gIkkxA1IwzND8tlJKoH1yK5YhKRkpELsx6YGPRvmM-1649912205-0-AbrerMAjlXhuWtoZxcAMB2eXRv6I3BLSMzAWuH9WbsPhmJdSAyDeEjoK7LLeuevMajXkJpvry+vRahs/QFCvVHbGwoPM084ztB87yb6lNmwP; _stadium_goods_session=jRAZv%2BTQZY%2BEW9%2F%2BHPls4%2FIdzReVE4z4CsUIdpmrSSfsal3GsDmuyUIuy1i6hJXqOLjgD87BetqiQxFA9mzdZzcULGFTkO%2BBuXms3S%2FUVdNJXUfGfnDdXig32pZmCb6wunneEjMYpZHljSaoyNNNPbZ1jGMzWfWO4aqUmAsPQOA05G3HdIZi4mnqKa%2F9BGLfEpRaHb0O9hZ1rr7BCwVJ51ebJWFrbPZVLuZrlQfLHM%2BW10uR%2FPuTBAp9msgY2%2BQhVB5rxgai%2BnvReXw4r%2BqBQHpTraIWt4lv9LzDsmjgGtlZeFZgN6QseBLDQpfaTTQA%2BLsoOCSld9fkVh2QxCB%2BnbPPu4dVqQ2Xtt%2BSvcfLVrbQv7jD60XqZ40ZkH%2FdPcJAUGXurL0VwJdGMqmhCi98mr6EEJJLOg%3D%3D--OMB9Fv2uFWghWA1V--OxHcvIsEzLln05MujidJNA%3D%3D'
            },
            body: {
                "query": "query MainContentContainerRefetchQuery(\n  $searchTerm: String\n  $maxProductsShown: Int\n) {\n  ...MainContentContainer_query_30m0jL\n}\n\nfragment MainContentContainer_query_30m0jL on Query {\n  configurableProducts(query: $searchTerm, first: $maxProductsShown) {\n    ...ProductSearchContainer_searchResults\n    edges {\n      node {\n        id\n        manufacturerSku\n        ...ManageProductProfilesModalContainer_algoliaProduct\n      }\n    }\n  }\n}\n\nfragment ManageProductProfilesModalContainer_algoliaProduct on ProductInterface {\n  __isProductInterface: __typename\n  id\n  manufacturerSku\n  intakeEnabled\n  autoApprovedSizes {\n    size\n    maxPrice {\n      __typename\n      ... on Price {\n        value {\n          value\n        }\n      }\n    }\n    minPrice {\n      __typename\n      ... on Price {\n        value {\n          value\n        }\n      }\n    }\n  }\n  ...ManageProductProfilesModal_algoliaProduct\n}\n\nfragment ManageProductProfilesModal_algoliaProduct on ProductInterface {\n  __isProductInterface: __typename\n  image(size: MEDIUM) {\n    url\n  }\n  brand\n  name\n  description\n  manufacturerSku\n  gender\n  color\n  nickname\n  releaseYear\n  ...ProductProfileDetails_algoliaProduct\n  variantSizes {\n    size\n  }\n}\n\nfragment ProductProfileDetails_algoliaProduct on ProductInterface {\n  __isProductInterface: __typename\n  id\n  manufacturerSku\n  autoApprovedSizes {\n    size\n    maxPrice {\n      __typename\n      ... on Price {\n        value {\n          value\n        }\n      }\n    }\n    minPrice {\n      __typename\n      ... on Price {\n        value {\n          value\n        }\n      }\n    }\n  }\n}\n\nfragment ProductSearchContainer_searchResults on AlgoliaProductConnection {\n  ...ProductSearchResults_products\n}\n\nfragment ProductSearchResults_products on AlgoliaProductConnection {\n  edges {\n    node {\n      id\n      manufacturerSku\n      intakeEnabled\n      ...ProductTileContainer_product\n    }\n  }\n}\n\nfragment ProductTileContainer_product on AlgoliaProduct {\n  id\n  brand\n  color\n  description\n  gender\n  image(size: MEDIUM) {\n    url\n  }\n  manufacturerSku\n  name\n  releaseYear\n  nickname\n  intakeEnabled\n}\n",
                "variables": {
                    "searchTerm": sku,
                    "maxProductsShown": 19
                }
            },
            json: true
        }, 
    function(error,response,body){
        if (error) throw new Error(error);
            console.log(body);
            res.send(body);
    });

});


app.get('/sx',(req, res) => {
    let urlKey = req.query.urlkey
    

    
    const query = `query GetMarketData($id: String!, $currencyCode: CurrencyCode, $countryCode: String!, $marketName: String) {\n  product(id: $id) {\n    id\n    listingType\n    deleted\n    ...ProductMerchandisingFragment\n    ...AffirmCalloutFragment\n    ...BreadcrumbsFragment\n    ...BreadcrumbSchemaFragment\n    ...HazmatWarningFragment\n    ...HeaderFragment\n    ...LastSaleFragment\n    ...UrgencyBadgeFragment\n    ...MarketActivityFragment\n    ...MediaFragment\n    ...MyPositionFragment\n    ...ProductDetailsFragment\n    ...ProductMetaTagsFragment\n    ...ProductSchemaFragment\n    ...ScreenTrackerFragment\n    ...SizeSelectorWrapperFragment\n    ...StatsForNerdsFragment\n    ...ThreeSixtyImageFragment\n    ...TrackingFragment\n    ...UtilityGroupFragment\n    __typename\n  }\n}\n\nfragment ProductMerchandisingFragment on Product {\n  id\n  merchandising {\n    title\n    subtitle\n    image {\n      alt\n      url\n      __typename\n    }\n    body\n    trackingEvent\n    link {\n      title\n      url\n      urlType\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment AffirmCalloutFragment on Product {\n  productCategory\n  urlKey\n  market(currencyCode: $currencyCode) {\n    bidAskData(country: $countryCode, market: $marketName) {\n      lowestAsk\n      __typename\n    }\n    __typename\n  }\n  variants {\n    id\n    market(currencyCode: $currencyCode) {\n      bidAskData(country: $countryCode, market: $marketName) {\n        lowestAsk\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment BreadcrumbsFragment on Product {\n  breadcrumbs {\n    name\n    url\n    level\n    __typename\n  }\n  __typename\n}\n\nfragment BreadcrumbSchemaFragment on Product {\n  breadcrumbs {\n    name\n    url\n    __typename\n  }\n  __typename\n}\n\nfragment HazmatWarningFragment on Product {\n  id\n  hazardousMaterial {\n    lithiumIonBucket\n    __typename\n  }\n  __typename\n}\n\nfragment HeaderFragment on Product {\n  primaryTitle\n  secondaryTitle\n  condition\n  productCategory\n  __typename\n}\n\nfragment LastSaleFragment on Product {\n  id\n  market(currencyCode: $currencyCode) {\n    ...LastSaleMarket\n    __typename\n  }\n  variants {\n    id\n    market(currencyCode: $currencyCode) {\n      ...LastSaleMarket\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment LastSaleMarket on Market {\n  salesInformation {\n    annualHigh\n    annualLow\n    volatility\n    pricePremium\n    lastSale\n    changeValue\n    changePercentage\n    __typename\n  }\n  __typename\n}\n\nfragment UrgencyBadgeFragment on Product {\n  id\n  productCategory\n  primaryCategory\n  sizeDescriptor\n  market(currencyCode: $currencyCode) {\n    ...LowInventoryBannerMarket\n    __typename\n  }\n  variants {\n    id\n    market(currencyCode: $currencyCode) {\n      ...LowInventoryBannerMarket\n      __typename\n    }\n    __typename\n  }\n  traits {\n    name\n    value\n    visible\n    __typename\n  }\n  __typename\n}\n\nfragment LowInventoryBannerMarket on Market {\n  bidAskData(country: $countryCode, market: $marketName) {\n    numberOfAsks\n    lowestAsk\n    __typename\n  }\n  salesInformation {\n    lastSale\n    salesLast72Hours\n    __typename\n  }\n  __typename\n}\n\nfragment MarketActivityFragment on Product {\n  id\n  title\n  productCategory\n  primaryTitle\n  secondaryTitle\n  media {\n    smallImageUrl\n    __typename\n  }\n  __typename\n}\n\nfragment MediaFragment on Product {\n  id\n  productCategory\n  title\n  brand\n  urlKey\n  variants {\n    id\n    hidden\n    traits {\n      size\n      __typename\n    }\n    __typename\n  }\n  media {\n    gallery\n    all360Images\n    imageUrl\n    __typename\n  }\n  __typename\n}\n\nfragment MyPositionFragment on Product {\n  id\n  urlKey\n  __typename\n}\n\nfragment ProductDetailsFragment on Product {\n  id\n  title\n  productCategory\n  description\n  traits {\n    name\n    value\n    visible\n    format\n    __typename\n  }\n  __typename\n}\n\nfragment ProductMetaTagsFragment on Product {\n  id\n  urlKey\n  productCategory\n  brand\n  model\n  title\n  description\n  condition\n  styleId\n  breadcrumbs {\n    name\n    url\n    __typename\n  }\n  traits {\n    name\n    value\n    __typename\n  }\n  media {\n    thumbUrl\n    imageUrl\n    __typename\n  }\n  market(currencyCode: $currencyCode) {\n    bidAskData(country: $countryCode, market: $marketName) {\n      lowestAsk\n      numberOfAsks\n      __typename\n    }\n    __typename\n  }\n  variants {\n    id\n    hidden\n    traits {\n      size\n      __typename\n    }\n    market(currencyCode: $currencyCode) {\n      bidAskData(country: $countryCode, market: $marketName) {\n        lowestAsk\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ProductSchemaFragment on Product {\n  id\n  urlKey\n  productCategory\n  brand\n  model\n  title\n  description\n  condition\n  styleId\n  traits {\n    name\n    value\n    __typename\n  }\n  media {\n    thumbUrl\n    imageUrl\n    __typename\n  }\n  market(currencyCode: $currencyCode) {\n    bidAskData(country: $countryCode, market: $marketName) {\n      lowestAsk\n      numberOfAsks\n      __typename\n    }\n    __typename\n  }\n  variants {\n    id\n    hidden\n    traits {\n      size\n      __typename\n    }\n    market(currencyCode: $currencyCode) {\n      bidAskData(country: $countryCode, market: $marketName) {\n        lowestAsk\n        __typename\n      }\n      __typename\n    }\n    gtins {\n      type\n      identifier\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ScreenTrackerFragment on Product {\n  id\n  brand\n  productCategory\n  primaryCategory\n  title\n  market(currencyCode: $currencyCode) {\n    bidAskData(country: $countryCode, market: $marketName) {\n      highestBid\n      lowestAsk\n      numberOfAsks\n      numberOfBids\n      __typename\n    }\n    salesInformation {\n      lastSale\n      __typename\n    }\n    __typename\n  }\n  media {\n    imageUrl\n    __typename\n  }\n  traits {\n    name\n    value\n    __typename\n  }\n  variants {\n    id\n    traits {\n      size\n      __typename\n    }\n    market(currencyCode: $currencyCode) {\n      bidAskData(country: $countryCode, market: $marketName) {\n        highestBid\n        lowestAsk\n        numberOfAsks\n        numberOfBids\n        __typename\n      }\n      salesInformation {\n        lastSale\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment SizeSelectorWrapperFragment on Product {\n  id\n  ...SizeSelectorFragment\n  ...SizeSelectorHeaderFragment\n  ...SizesFragment\n  ...SizesOptionsFragment\n  ...SizeChartFragment\n  ...SizeChartContentFragment\n  ...SizeConversionFragment\n  ...SizesAllButtonFragment\n  __typename\n}\n\nfragment SizeSelectorFragment on Product {\n  id\n  title\n  productCategory\n  sizeDescriptor\n  availableSizeConversions {\n    name\n    type\n    __typename\n  }\n  defaultSizeConversion {\n    name\n    type\n    __typename\n  }\n  variants {\n    id\n    hidden\n    traits {\n      size\n      __typename\n    }\n    sizeChart {\n      baseSize\n      baseType\n      displayOptions {\n        size\n        type\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment SizeSelectorHeaderFragment on Product {\n  sizeDescriptor\n  productCategory\n  availableSizeConversions {\n    name\n    type\n    __typename\n  }\n  __typename\n}\n\nfragment SizesFragment on Product {\n  id\n  productCategory\n  listingType\n  title\n  __typename\n}\n\nfragment SizesOptionsFragment on Product {\n  id\n  listingType\n  variants {\n    id\n    hidden\n    group {\n      shortCode\n      __typename\n    }\n    traits {\n      size\n      __typename\n    }\n    sizeChart {\n      baseSize\n      baseType\n      displayOptions {\n        size\n        type\n        __typename\n      }\n      __typename\n    }\n    market(currencyCode: $currencyCode) {\n      bidAskData(country: $countryCode, market: $marketName) {\n        lowestAsk\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment SizeChartFragment on Product {\n  availableSizeConversions {\n    name\n    type\n    __typename\n  }\n  defaultSizeConversion {\n    name\n    type\n    __typename\n  }\n  __typename\n}\n\nfragment SizeChartContentFragment on Product {\n  availableSizeConversions {\n    name\n    type\n    __typename\n  }\n  defaultSizeConversion {\n    name\n    type\n    __typename\n  }\n  variants {\n    id\n    sizeChart {\n      baseSize\n      baseType\n      displayOptions {\n        size\n        type\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment SizeConversionFragment on Product {\n  productCategory\n  sizeDescriptor\n  availableSizeConversions {\n    name\n    type\n    __typename\n  }\n  defaultSizeConversion {\n    name\n    type\n    __typename\n  }\n  __typename\n}\n\nfragment SizesAllButtonFragment on Product {\n  id\n  sizeAllDescriptor\n  market(currencyCode: $currencyCode) {\n    bidAskData(country: $countryCode, market: $marketName) {\n      lowestAsk\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment StatsForNerdsFragment on Product {\n  id\n  title\n  productCategory\n  sizeDescriptor\n  urlKey\n  __typename\n}\n\nfragment ThreeSixtyImageFragment on Product {\n  id\n  title\n  variants {\n    id\n    __typename\n  }\n  productCategory\n  media {\n    all360Images\n    __typename\n  }\n  __typename\n}\n\nfragment TrackingFragment on Product {\n  id\n  productCategory\n  primaryCategory\n  brand\n  title\n  market(currencyCode: $currencyCode) {\n    bidAskData(country: $countryCode, market: $marketName) {\n      highestBid\n      lowestAsk\n      __typename\n    }\n    __typename\n  }\n  variants {\n    id\n    market(currencyCode: $currencyCode) {\n      bidAskData(country: $countryCode, market: $marketName) {\n        highestBid\n        lowestAsk\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment UtilityGroupFragment on Product {\n  id\n  ...FollowFragment\n  ...FollowContentFragment\n  ...FollowShareContentFragment\n  ...FollowSuccessFragment\n  ...PortfolioFragment\n  ...PortfolioContentFragment\n  ...ShareFragment\n  __typename\n}\n\nfragment FollowFragment on Product {\n  id\n  productCategory\n  title\n  followed\n  variants {\n    id\n    followed\n    traits {\n      size\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment FollowContentFragment on Product {\n  title\n  __typename\n}\n\nfragment FollowShareContentFragment on Product {\n  id\n  title\n  sizeDescriptor\n  urlKey\n  variants {\n    id\n    traits {\n      size\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment FollowSuccessFragment on Product {\n  id\n  title\n  productCategory\n  sizeDescriptor\n  media {\n    smallImageUrl\n    __typename\n  }\n  variants {\n    id\n    traits {\n      size\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment PortfolioFragment on Product {\n  id\n  title\n  productCategory\n  variants {\n    id\n    __typename\n  }\n  traits {\n    name\n    value\n    __typename\n  }\n  __typename\n}\n\nfragment PortfolioContentFragment on Product {\n  id\n  productCategory\n  sizeDescriptor\n  variants {\n    id\n    traits {\n      size\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ShareFragment on Product {\n  id\n  productCategory\n  title\n  media {\n    imageUrl\n    __typename\n  }\n  __typename\n}\n`
    var rawBody = {
        "operationName": "GetMarketData",
        "variables": {
            "id": urlKey,
            "currencyCode": "USD",
            "countryCode": "US"
        },
        "query": query
    };

    request.post(
    {
        url:"https://stockx.com/api/p/e",
        headers: {
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'apollographql-client-name': 'Iron',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
            'content-type': 'application/json',
            'accept': '*/*',
            'selected-country': 'US',
            'x-stockx-device-id': 'web-f726359c-5227-407b-a59d-1b49d4029694',
            'apollographql-client-version': '2022.06.19.01',
            'sec-ch-ua-platform': '"Windows"',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'host': 'stockx.com',
            'Cookie': '__cf_bm=eWOrWcE_4qjfDVt9epbuW_l.PmdZLJ5fnIfQE8SE5Bo-1656825736-0-AXgy6xPKyS301jJNyNkROnlgMzule7GBphCAhIiXFUM3HrDsw8f9rEvAv+ZAmX/zosMGiNNhcfwS1enqttvj1qs='
                    },
        body: rawBody,
        json: true
    },
    function(error,response,body){
    if (error) throw new Error(error);
        console.log(body);
        res.send(body);
    });
});

app.get('/sx-product-search',(req, res) => {
    let userSearch = req.query.usersearch
    
    const searchUrl = `https://stockx.com/api/browse?_search=${userSearch}&page=1&resultsPerPage=10&dataType=product&facetsToRetrieve[]=browseVerticals&propsToRetrieve[][]=brand&propsToRetrieve[][]=colorway&propsToRetrieve[][]=media.thumbUrl&propsToRetrieve[][]=title&propsToRetrieve[][]=productCategory&propsToRetrieve[][]=shortDescription&propsToRetrieve[][]=urlKey`
    
    
    request.get(
        {
            url: searchUrl,
            headers: {
                "sec-ch-ua":"\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
                "sec-ch-ua-mobile":"?0",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36",
                "Accept":"application/json",
                "X-Requested-With":"XMLHttpRequest",
                "App-Platform":"Iron",
                "sec-ch-ua-platform":"\"Windows\"",
                "App-Version":"2022.03.13.01",
                "Sec-Fetch-Site":"same-origin",
                "Sec-Fetch-Mode":"cors",
                "Sec-Fetch-Dest":"empty",
                "Cookie":"__cf_bm=vm.czyHqlthF4cXfqdyHC1eMGVkn8ipxusUlrQb9Nds-1654978446-0-AeBpSEOfwQPkQjGSnLiaLMTqi3QzEjzRLy4JOSoJzA8IoRE0jkvrkHY+SMPH8ccuN5b1Qjl4XWRXD9uoe9aOM8o="
            }
        },
    function(error,response,body){
        if (error) throw new Error(error);
        console.log(body);
        res.send(body);
    });
});


app.get('/goat', (req, res) => {
    let name = req.query.name;
    let size = req.query.size;

    request.get(
    {
        url:`https://www.goat.com/api/v1/product_templates/${name}/offer_data_v2?size=${size}`,
        headers: {
            'host': 'www.goat.com',
            'accept': 'application/json',
            'authorization': 'Token token="NwzC9s33qyC2gjNYF4rQ"',
            'accept-language': 'en-US,en;q=0.9',
            'x-emb-st': '1649628708789',
            'x-px-authorization': '3',
            'user-agent': 'GOAT/2.51.0 (iPhone; iOS 15.3.1; Scale/3.00) Locale/en',
            'connection': 'keep-alive',
            'x-emb-id': '5AA2E46AA370410B85641EA8E3FF2B7B',
            'x-px-original-token': '3:aa85372cc58ab190ec17c70a4ef56805106c0786fb247ede4a9ef9217ffe2ee1:DV56P5C5NVmyRXIJyDNh7G+TsyK2T7pRIqMVx8D7l3XTDn7tOLjkAVjVC2TEeqT8M53irN2TAT9cBiLnNUS3qQ==:1000:L28ezkUBWs8rdak8cEFH2o0Obh29v/3wYF8MOHmUYgkjp3a4p05zmM3d856n/gjVH35zFiBkI+DwBmCiMG5CIXcsvms3Pjk8qgSx6Wh8OrK3PegpptAwtMHcXuVVOoDoeuc9cktxKxLLJDUGRMZnqRGZGpghjvPP/bJXiepm7rlA9L05ucroFBJ82JUc8y6TL604Ra57YvLCaIFv+yI+sQ==',
            'cookie': '_sneakers_session=YFGhEE9CwqrmF4NEqKqC17%2Fd8gQ8cJM%2FxdiHwci7SUmeOkE7M%2BwuCQH3Vtn%2BCk%2BRziaVI7bndCxBOFv6iQ5tx%2F4CdmZHSfwIjYKw%2BaOYOpTwB%2Bz%2BgtHrzUxXJp1KBH48N9gCacRkSbzRjkwaw6Lu4Zt0gZa95puvG4LntMdlJmC3AjxrYD5RWpMgPFeeAekfiRITN8PDb74APVJlNEP4X7BM9uODF4kaUELN2nG48Lg%2B2posDZVhXJGALNIYuEaioxJmNHuNQM%2BsBxwxq%2B7t1M7vum0GjbG1rWXqhbwUZzgyncovtGuT5PWT0H%2B49lZVSKCK1hwwFHnz91c9KACFnyd42w%2BjZA3N5SDk0ahkFhicGMndbrRQSY4EjJdYfvFPs1oB1NdQmrrGUqm%2BrA%3D%3D--XVWfstD1gkU1L16t--8%2FaH4mbdfjPpuHE%2FUJKPMg%3D%3D; __cf_bm=5J4b8.om7uax0M._DzHOrcAYpadNvcuZ2wLq8fYSql0-1649628568-0-Ad92i2GSqD6rXF6cJ9baA8Z4h/reKBTyqPnyomoFfK1RYIgyisR5unVduyuNIrdYt6n5sKliq82NUIGgyY74gYY=; currency=USD; __cf_bm=385lGxqhASflrOHg6jDfJJCM5lP_l1hWXvaI9RtLFZ4-1649879086-0-AW+5m5Fjs7D1TEMPxpQcKkXOlEv8icwBSo6a6Sz836vNanf/toypRhMX+EVZ9nEOkB+wePr5o9qKN+2sQWXvls0=; _sneakers_session=nf98690I2%2BpIFWU70vGlq3FFvn24RbwDIb6lvDQrU0Z4tf5GX1KpUupUBonoClE8o5UaBgjQI3sHeBx0dR51bdv768Y9dVWjghkFnMwXZfy2cczAr%2FIz%2BYop7Y%2Fz4aUpOshFKsM%2FvjXirIbNrFgE0H03jjOBIz8TwCRweJ1OcXEh40ef5Bnq8oXgdFM%2FbT0lpZ6nlzJARYGHr%2FY3xzFqBTQW6gZfSCkaSXCdPI2E8IVn9rPDcfAyM%2FxMx3trz12XS1aL0IypuyoT5JirsobB64vXVbky1MYOTCJZMoOFooZs96zda9lvgd%2FZL22NQqLbN9Hdu4nImTG%2FXYBS6iG8urN%2FcxezfV9eaohk69vokWplanQkmJqaKSo3D%2FytSMyaPJeGC8sus8X1nozl5Q%3D%3D--dMvTPhsRqK0wrFnn--W%2B3wwPtSvq85MDi84A456g%3D%3D',
            'x-postman-captr': '9996578'
        },
    },
    function(error,response,body){
    if (error) throw new Error(error);
        console.log(body);
        res.send(body);
    });
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});