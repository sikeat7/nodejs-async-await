// USD CAD
// 23 USD is worth 28 CAD. You can spend these in the following countries.

const axios = require('axios');

//Uanble to get exhcange rate for USD to KHR
const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        const rate = response.data.rates[to];

        if (rate) {
            return rate;
        } else {
            throw new Error();
        }
    } catch (e) {
        throw new Error(`Unable to get exhange rate for ${from} and ${to}.`);
    }
    
};

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
}

const convertCurrency = (from, to, amount) => {
    let countries;
    return getCountries(to).then((tempCountries) => {
        countries = tempCountries;
        return getExchangeRate(from, to);
    }).then((rate) => {
        const exchangeAmount = amount * rate;

        return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
    }).catch((e) => console.log(`${to} not available in that country.`));
}

// Create convertCurrencyAlt as async function
// Get countries and rate using await and our two function
// Calculate exchangeAmount
// Return status string
const convertCurrencyAlt = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    const exchangeAmount = amount * rate;

    return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
}

convertCurrencyAlt('USD', 'EUR', 100).then((log) => {
    console.log(log);
}).catch((e) => {
    console.log(e.message);
});