// USD CAD
// 23 USD is worth 28 CAD. You can spend these in the following countries.

const axios = require('axios');

var fixer_access_key = '1cac09141b3ffb237f3e3c3a5087f25b';
const getExchangeRate = (from, to) => {
    axios.get(`http://data.fixer.io/api/latest?access_key=${fixer_access_key}&symbols=${from},${to}`).then((response) => {
        return response.data.rates[to];
    });
};

getExchangeRate('USD', 'KHR').then((rate) => {
    console.log(rate);
});