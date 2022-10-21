fetch('http://api.coinlayer.com/api/live?access_key=1296b039c6aa51db1f8dd40737128020&symbols=BTC,LTC,ETH,DOGE', {
    method: 'GET',
    // headers: {
    //     'Content-Type': 'application/json'
    // },

}).then(res => {
    return res.json()
})
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

// async function getPrice(rate){
//     let price = document.getElementById('bitcoin'[rate].attribute[1].value);
//     let headers = new Headers ([
//         ['Content-Type', 'aplication/json'],
//         ['Accept', 'application/json'],
//         ['Authorization', '1296b039c6aa51db1f8dd40737128020']
//     ]);

//     let request = new Request('http://api.coinlayer.com/api/live?access_key=1296b039c6aa51db1f8dd40737128020&symbols=BTC,LTC,ETH,DOGE', {
//         method: 'GET',
//         headers: headers
//     });

//     let result = await fetch(request);
//     let response = await result.json();
//     console.log(response)
//     let rate = response.rates.btc.preview_url
// }


// var btc = document.getElementById("bitcoin");
// var ltc = document.getElementById("litecoin");
// var eth = document.getElementById("ethereum");
// var doge = document.getElementById("dogecoin");

// var liveprice = {
//     "async": true,
//     "scroosDomain": true,
//     "url": "http://api.coinlayer.com/api/live?access_key=1296b039c6aa51db1f8dd40737128020&symbols=BTC,LTC,ETH,DOGE",

//     "method": "GET",
//     // "headers": {
//     //     access_key: '2edd9de2a1c5cd17a81ff1ef3a7915cc'
//     // }
// }

// const livePrice = 'http://api.coinlayer.com/api/live?access_key=1296b039c6aa51db1f8dd40737128020'

// async function getPrice() {
//     const response = await fetch(livePrice);
//     const data = await response.json();
//     const {btc, ltc, eth, doge } = data;

//     document.getElementById('bitcoin').textContent = btc;
//     document.getElementById('litecoin').textContent = ltc;
//     document.getElementById('ethereum').textContent = eth;
//     document.getElementById('dogecoin').textContent = doge;

// }

// getPrice();

// $.ajax(liveprice).done(function (response){
//     btc.innerHTML = response.bitcoin;
//     ltc.innerHTML = response.litecoin;
//     eth.innerHTML = response.ethereum;
//     doge.innerHTML = response.dogecoin;

// });



// be8b45ba-d9cc-45b7-9e49-f81d807bb3ad