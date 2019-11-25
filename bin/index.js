#!/usr/bin/env node
const countryList = require('country-list');
const axios = require('axios');


const { getCode, getName } = require('country-list');
const country = process.argv[2];
countryCode = (getCode(country));
console.log(getCode(country));

let currentDay = new Date();
let currentYear = currentDay.getFullYear();
if (country == null) {
    console.log("please use a country name as parameters");
} else if (countryCode == undefined) {
    console.log('this country is not available');
    
} else {
    getholidays();
}




async function getholidays() {
  try {
    const response = await axios.get("https://date.nager.at/Api/v2/PublicHolidays/" + currentYear + "/" + countryCode);
    console.log(response.data[0]);
  } catch (error) {
    console.error(error);
  }
}
